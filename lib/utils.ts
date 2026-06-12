import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Same-origin API base. Leave empty for local MongoDB routes in this app. */
export const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";
