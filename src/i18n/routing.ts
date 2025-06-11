import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  // Uma lista de todos os locales que são suportados
  locales: ['pt', 'en'],

  // Usado quando nenhum locale corresponde
  defaultLocale: 'pt'
}); 