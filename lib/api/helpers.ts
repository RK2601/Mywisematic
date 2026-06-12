import { createHmac, randomUUID, timingSafeEqual } from "crypto";
import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { ADMIN_SESSION_COOKIE } from "@/lib/admin/constants";

const SESSION_MAX_AGE = 60 * 60 * 24 * 7;

export type AdminSession = {
  userId: string;
  username: string;
};

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
  path: "/",
  maxAge: SESSION_MAX_AGE,
};

function getSecret() {
  const secret = process.env.AUTH_SECRET || process.env.MONGODB_URI;
  if (!secret) {
    throw new Error("AUTH_SECRET or MONGODB_URI must be set for session signing.");
  }
  return secret;
}

export function signSession(session: AdminSession): string {
  const payload = Buffer.from(
    JSON.stringify({
      ...session,
      exp: Date.now() + SESSION_MAX_AGE * 1000,
    }),
  ).toString("base64url");
  const signature = createHmac("sha256", getSecret())
    .update(payload)
    .digest("base64url");
  return `${payload}.${signature}`;
}

export function verifySessionToken(token: string): AdminSession | null {
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return null;

  const expected = createHmac("sha256", getSecret())
    .update(payload)
    .digest("base64url");

  if (
    signature.length !== expected.length ||
    !timingSafeEqual(Buffer.from(signature), Buffer.from(expected))
  ) {
    return null;
  }

  try {
    const data = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
    if (typeof data.exp !== "number" || data.exp < Date.now()) return null;
    if (!data.userId || !data.username) return null;
    return { userId: String(data.userId), username: String(data.username) };
  } catch {
    return null;
  }
}

export function getAdminSession(): AdminSession | null {
  const token = cookies().get(ADMIN_SESSION_COOKIE)?.value;
  if (!token) return null;
  return verifySessionToken(token);
}

export function setAdminSessionCookie(session: AdminSession) {
  cookies().set(ADMIN_SESSION_COOKIE, signSession(session), cookieOptions);
}

export function applyAdminSessionToResponse(
  response: NextResponse,
  session: AdminSession,
) {
  response.cookies.set(ADMIN_SESSION_COOKIE, signSession(session), cookieOptions);
}

export function clearAdminSession(response?: NextResponse) {
  if (response) {
    response.cookies.delete(ADMIN_SESSION_COOKIE);
    return;
  }
  cookies().delete(ADMIN_SESSION_COOKIE);
}

export function requireAdminSession(): AdminSession {
  const session = getAdminSession();
  if (!session) {
    throw new AdminAuthError();
  }
  return session;
}

export class AdminAuthError extends Error {
  constructor(message = "Unauthorized") {
    super(message);
    this.name = "AdminAuthError";
  }
}

export function unauthorizedResponse(message = "Unauthorized") {
  return NextResponse.json({ message }, { status: 401 });
}

export function errorResponse(error: string, status = 400) {
  return NextResponse.json({ success: false, error }, { status });
}

export function getQueryId(request: Request): string | null {
  const id = new URL(request.url).searchParams.get("id");
  return id?.trim() || null;
}

export async function saveUploadedFile(
  file: File,
  folder: string,
): Promise<string> {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const extension = path.extname(file.name) || "";
  const filename = `${randomUUID()}${extension}`;
  const uploadDir = path.join(process.cwd(), "public", "uploads", folder);

  await mkdir(uploadDir, { recursive: true });
  await writeFile(path.join(uploadDir, filename), buffer);

  return `/uploads/${folder}/${filename}`;
}

export async function readJsonBody<T = Record<string, unknown>>(
  request: Request,
): Promise<T> {
  return (await request.json()) as T;
}
