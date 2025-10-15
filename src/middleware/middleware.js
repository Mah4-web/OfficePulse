import { createMiddlewareSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

export async function middleware(req) {
  // Create Supabase client for middleware
  const supabase = createMiddlewareSupabaseClient({
    req,
    res: NextResponse.next(),
  });

  // Get the user's session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // If there is no session → redirect to login
  if (!session) {
    const loginUrl = new URL("/login", req.url);
    return NextResponse.redirect(loginUrl);
  }

  // Optional: check user role
  // if (session.user.role !== 'admin') {
  //   return NextResponse.redirect(new URL('/not-authorized', req.url));
  // }

  // Session is valid → allow access
  return NextResponse.next();
}

// Define the paths where middleware should run
export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*", "/api/secure/:path*"],
};
