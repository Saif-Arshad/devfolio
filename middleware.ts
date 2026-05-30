import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { updateSession } from '@/utils/supabase/middleware';

export async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    const authRoute = '/admin';
    const isAuthRoute = path === authRoute;
    const isAdminPath = /^\/dashboard(\/[^\/]+)*\/?$/.test(path);

    // Refresh the Supabase session and find the current user.
    const { supabaseResponse, user } = await updateSession(request);

    if (isAuthRoute && user) {
        return NextResponse.redirect(new URL('/dashboard', request.nextUrl));
    }

    if (isAdminPath && !user) {
        return NextResponse.redirect(new URL('/admin', request.nextUrl));
    }

    return supabaseResponse;
}

export const config = {
    matcher: [
        '/dashboard/:path*',
        '/admin',
    ],
};
