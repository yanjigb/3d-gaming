/* eslint-disable consistent-return */

import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import type { NextMiddleware, NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { i18n } from './share/dictionaries/i18n-config'

function getLocale(request: NextRequest): string | undefined {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {}

  request.headers.forEach((value, key) => {
    negotiatorHeaders[key] = value
  })

  const locales: string[] = [...i18n.locales]

  // Use negotiator and intl-localematcher to get best locale
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages(locales)

  const locale = matchLocale(languages, locales, i18n.defaultLocale)

  return locale
}

// Add CORS headers to the response
function addCorsHeaders(response: NextResponse): NextResponse {
  // Allow requests from any origin
  response.headers.set('Access-Control-Allow-Origin', '*')

  // Allow specific HTTP methods
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

  // Allow specific headers
  response.headers.set(
    'Access-Control-Allow-Headers',
    'X-Requested-With, Content-Type, Authorization',
  )

  // Allow credentials (cookies, authorization headers)
  // response.headers.set('Access-Control-Allow-Credentials', 'true')

  // Cache preflight requests for 1 hour (3600 seconds)
  response.headers.set('Access-Control-Max-Age', '3600')

  return response
}

export const middleware: NextMiddleware = (request: NextRequest) => {
  const { pathname, search } = request.nextUrl

  // Handle CORS preflight requests (OPTIONS)
  if (request.method === 'OPTIONS' && pathname.startsWith('/api')) {
    const response = new NextResponse(null, { status: 204 })
    return addCorsHeaders(response)
  }

  // For API routes, just add CORS headers without locale handling
  if (pathname.startsWith('/api/')) {
    const response = NextResponse.next()
    return addCorsHeaders(response)
  }

  // // `/_next/` and `/api/` are ignored by the watcher, but we need to ignore files in `public` manually.
  if (
    [
      '/robots.txt',
      '/favicon.ico',
      // Your other files in `public`
    ].includes(pathname)
  )
    return

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  )

  // Redirect if there is no locale (but skip for API routes)
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}${search}`, request.url),
    )
  }
}

export const config = {
  // Update matcher to include API routes and exclude videos
  matcher: ['/((?!_next/static|_next/image|favicon.ico|svg|image|assets|swagger|videos).*)'],
}
