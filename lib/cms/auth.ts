import "server-only";
import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// TODO(security): move credentials + secret to environment variables and hash
// the password before this ships anywhere public. admin/admin is dev-only.
const ADMIN_USER = "admin";
const ADMIN_PASS = "admin";
const SECRET = process.env.CMS_SECRET ?? "refill-dev-cms-secret";
const COOKIE = "refill_admin";
const MAX_AGE = 60 * 60 * 24; // one day

function sessionToken(): string {
  return createHmac("sha256", SECRET).update("refill-admin-session-v1").digest("hex");
}

export function checkCredentials(username: string, password: string): boolean {
  return username === ADMIN_USER && password === ADMIN_PASS;
}

export async function createSession(): Promise<void> {
  (await cookies()).set(COOKIE, sessionToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: MAX_AGE,
  });
}

export async function destroySession(): Promise<void> {
  (await cookies()).delete(COOKIE);
}

export async function isAdmin(): Promise<boolean> {
  const value = (await cookies()).get(COOKIE)?.value;
  if (!value) return false;
  const expected = sessionToken();
  const a = Buffer.from(value);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

/** Gate for admin pages — bounces unauthenticated visitors to the login. */
export async function requireAdmin(): Promise<void> {
  if (!(await isAdmin())) redirect("/admin/login");
}

/** Gate for server actions — throws instead of redirecting. */
export async function assertAdmin(): Promise<void> {
  if (!(await isAdmin())) throw new Error("Unauthorized");
}
