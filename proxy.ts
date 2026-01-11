// middleware.ts - FIXED VERSION
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Tentukan route yang PUBLIC (tidak perlu auth)
const isPublicRoute = createRouteMatcher([
  "/", // Home page
  "/sign-in(.*)", // Sign in page
  "/sign-up(.*)", // Sign up page
  "/verify-email(.*)", // Email verification
  "/api/webhooks/clerk(.*)", // Clerk webhook
  "/api/getUser(.*)", // Tambahkan ini - API route untuk getUser
  "/favicon.ico", // Favicon
  "/_next(.*)", // Next.js internal
  "/(api|trpc)(.*)", // API routes (sesuaikan)
]);

export default clerkMiddleware(async (auth, req) => {
  // Jika route public, lanjutkan tanpa auth
  if (isPublicRoute(req)) {
    return NextResponse.next();
  }

  // Jika bukan public route, require auth
  const { userId } = await auth();

  if (!userId) {
    // User tidak authenticated, redirect ke sign-in
    const signInUrl = new URL("/sign-in", req.url);
    signInUrl.searchParams.set("redirect_url", req.url);
    return NextResponse.redirect(signInUrl);
  }

  // User authenticated, lanjutkan
  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip semua static files dan internal paths
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|css|js)).*)",
    "/",
  ],
};
