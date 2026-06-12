import { handleLogin } from "@/lib/api/login-handler";

export async function POST(request: Request) {
  return handleLogin(request);
}
