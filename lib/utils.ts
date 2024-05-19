import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function setCookies(): Promise<{ sessionKey: string | null, xsrfToken: string | null }> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/sanctum/csrf-cookie`, {
    method: "GET",
  });

  const setCookieHeader = res.headers.get("set-cookie");
  console.log("setCookieHeader", setCookieHeader);

  if (!setCookieHeader) {
    return { sessionKey: null, xsrfToken: null };
  }

  const cookies = setCookieHeader.split(", ");

  let sessionKey: string | null = null;
  let xsrfToken: string | null = null;

  for (const cookie of cookies) {
    if (cookie.startsWith(`${process.env.NEXT_PUBLIC_BACKEND_SESSION}=`)) {
      sessionKey = cookie.split("=")[1].split(";")[0];
    } else if (cookie.startsWith("XSRF-TOKEN=")) {
      xsrfToken = cookie.split("=")[1].split(";")[0];
    }

    if (sessionKey && xsrfToken) {
      break;
    }
  }

  return { sessionKey, xsrfToken };
}
