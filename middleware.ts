import { createServerClient } from '@supabase/ssr';
import { NextRequest, NextResponse } from 'next/server';
export async function middleware(request: NextRequest) {
  try {
    // Initialize the response
    let supabaseResponse = NextResponse.next();

    // Create Supabase client with cookie handling
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return request.cookies.getAll();
          },
          setAll(cookies) {
            cookies.forEach(({ name, value, options }) => {
              request.cookies.set(name, value);
              supabaseResponse.cookies.set(name, value, options);
            });
          },
        },
      }
    );

    // Refresh the session (or perform other auth-related tasks)
    const { data: { session } } = await supabase.auth.getSession();

    // Optional: Protect routes based on session
    // Example: Redirect to login if no session and accessing protected route
    if (!session && request.nextUrl.pathname.startsWith('/main')) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    // Log for debugging
    console.log(`Middleware processed: ${request.url}`);

    return supabaseResponse;
  } catch (error) {
    console.error('Middleware error:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - Static files (_next/static)
     * - Image optimization (_next/image)
     * - Favicon (favicon.ico)
     * - Static assets (svg, png, jpg, etc.)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
