import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Corresponder apenas às rotas com i18n
  matcher: ['/', '/(pt|en)/:path*']
}; 