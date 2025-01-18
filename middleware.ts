import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    const authRoute = '/admin';
    const isAuthRoute = path === authRoute;
    const isAdminPath = /^\/dashboard(\/[^\/]+)*\/?$/.test(path);
    const userToken = request.cookies.get('admin-token')?.value;
    try {


        if (isAuthRoute && userToken) {
            return NextResponse.redirect(new URL('/dashboard', request.nextUrl));
        }

        if (isAdminPath && !userToken) {
            return NextResponse.redirect(new URL('/admin', request.nextUrl));
        }

        return NextResponse.next();
    } catch (error: any) {
        if (isAdminPath) {
            return NextResponse.redirect(new URL('/admin', request.nextUrl));
        }

        return NextResponse.next();
    }
}

export const config = {
    matcher: [
        '/dashboard/:path*',
        '/admin',
    ],
};
