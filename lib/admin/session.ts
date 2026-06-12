export {
  applyAdminSessionToResponse,
  clearAdminSession,
  getAdminSession,
  setAdminSessionCookie,
} from "@/lib/api/helpers";

export async function isAdminAuthenticated(): Promise<boolean> {
  const { getAdminSession } = await import("@/lib/api/helpers");
  return getAdminSession() !== null;
}
