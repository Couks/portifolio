import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

export default getRequestConfig(async ({requestLocale}) => {
  // Isso normalmente corresponde ao segmento `[locale]`
  let locale = await requestLocale;

  // Garantir que um locale válido está sendo usado
  if (!locale || !routing.locales.includes(locale as 'pt' | 'en')) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../locales/${locale}.json`)).default
  };
}); 