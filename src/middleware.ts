import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  // Add this near the top of your middleware function
  console.log("Request URL:", req.nextUrl.pathname);
  console.log("NEXTAUTH_SECRET exists:", !!process.env.AUTH_SECRET);
  console.log("NODE_ENV:", process.env.NODE_ENV);

  // Get the token with secure cookie settings for production
  const token = await getToken({
    req,
    secret: process.env.AUTH_SECRET,
    secureCookie: true, // must match your deployment HTTPS
    // secureCookie: process.env.NODE_ENV === 'production' // Important for deployed environments
  });

  console.log("Middleware token:", token ? "exists" : "null");
  console.log("Cookies:", req.cookies);

  // If no token and trying to access protected route, redirect to sign-in
  if (!token && req.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  if (!token && req.nextUrl.pathname.startsWith("/products")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // If token exists and on homepage, redirect to dashboard
  if (token && req.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/products", req.url));
  }
  if (token && req.nextUrl.pathname === "/registration") {
    return NextResponse.redirect(new URL("/products", req.url));
  }

  // Continue for all other cases
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};