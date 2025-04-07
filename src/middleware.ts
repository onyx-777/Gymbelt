import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([""]);

export default clerkMiddleware(async (auth, req) => {
  // Check for the 'x-middleware-subrequest' header and block the request
  if (req.headers.get("x-middleware-subrequest")) {
    console.warn("Blocked request due to x-middleware-subrequest header");
    return new Response("Forbidden", { status: 403 });
  }

  // Check if the route is protected
  if (isProtectedRoute(req)) await auth.protect();

  // const url = req.nextUrl.clone();
  // const host = req.headers.get('host');

  // if (!host) {
  //   return NextResponse.next(); // Early return if host is not found
  // }

  // const subdomain = host.split('.')[0]; // Extract the subdomain (e.g., 'gym' from 'gym.localhost:3000')
  // console.log('Host:', host);
  // console.log('Subdomain:', subdomain);

  // // If the subdomain is 'www' or matches the main domain, let the request pass through
  // if (subdomain === 'www' || subdomain === process.env.NEXT_PUBLIC_DOMAIN) {
  //   return NextResponse.next();
  // }

  // // Handle edge case where subdomain might not be set or invalid
  // if (!subdomain || subdomain === 'localhost') {
  //   return NextResponse.next(); // Allow requests with no subdomain or 'localhost' to continue
  // }

  // // Rewriting to the gyms/[subdomain] page
  // const targetUrl = new URL(`/gyms/${subdomain}${url.pathname}${url.search}${url.hash}`, req.url);

  // // Ensure that the URL is correctly rewritten to the /gyms/[subdomain] route
  // console.log('Rewriting to URL:', targetUrl.href);

  // return NextResponse.rewrite(targetUrl);
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
