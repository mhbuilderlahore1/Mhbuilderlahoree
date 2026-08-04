import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Public routes
  if (
    pathname.startsWith("/login") ||
    pathname.startsWith("/_next") ||
    pathname === "/"
  ) {
    return NextResponse.next();
  }

  // TODO: Step 26 mein authentication check add karenge.

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
