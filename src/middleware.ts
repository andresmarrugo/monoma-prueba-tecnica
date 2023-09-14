import { redirect } from 'next/dist/server/api-utils'
import { NextResponse } from 'next/server'
import type { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest, response: NextResponse) {
    if (request.nextUrl.pathname.match(/^\/$/)) {
        let token = request.cookies.get('token')?.value
        if (token) {
            return NextResponse.redirect(new URL('/pokemon/list', request.url))
        }
    }
}