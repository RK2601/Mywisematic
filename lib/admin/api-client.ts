"use client";

type ApiOptions = Omit<RequestInit, "body"> & {
  body?: BodyInit | Record<string, unknown> | null;
  params?: Record<string, string | number | boolean | undefined>;
};

function buildApiUrl(path: string, params?: ApiOptions["params"]) {
  const cleanPath = path.replace(/^\//, "").replace(/^api\//, "");
  const url = new URL(`/api/${cleanPath}`, window.location.origin);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        url.searchParams.set(key, String(value));
      }
    });
  }

  return url.toString();
}

export async function adminClientFetch<T = unknown>(
  path: string,
  options: ApiOptions = {},
): Promise<T> {
  const { body, params, headers, ...rest } = options;
  const url = buildApiUrl(path, params);

  let requestBody: BodyInit | undefined;
  const requestHeaders = new Headers(headers);

  if (body instanceof FormData || typeof body === "string") {
    requestBody = body;
  } else if (body && typeof body === "object") {
    requestBody = JSON.stringify(body);
    if (!requestHeaders.has("Content-Type")) {
      requestHeaders.set("Content-Type", "application/json");
    }
  }

  const response = await fetch(url, {
    ...rest,
    headers: requestHeaders,
    body: requestBody,
    credentials: "include",
  });

  const contentType = response.headers.get("content-type") || "";
  const data = contentType.includes("application/json")
    ? await response.json()
    : await response.text();

  if (!response.ok) {
    const message =
      typeof data === "object" && data && "error" in data
        ? String((data as { error?: string }).error)
        : typeof data === "object" && data && "message" in data
          ? String((data as { message?: string }).message)
          : "Request failed";
    throw new Error(message);
  }

  return data as T;
}

export async function checkAdminAuth(): Promise<boolean> {
  try {
    const response = await fetch("/api/admin/auth/check", {
      credentials: "include",
      cache: "no-store",
    });
    const data = await response.json();
    return Boolean(data.authenticated);
  } catch {
    return false;
  }
}

export async function adminLogin(username: string, password: string) {
  const response = await fetch("/api/admin/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
    credentials: "include",
  });
  const data = await response.json();
  if (!response.ok || !data.success) {
    throw new Error(data.error || "Invalid credentials");
  }
  return data;
}

export async function adminLogout() {
  await fetch("/api/admin/logout", {
    method: "POST",
    credentials: "include",
  });
}
