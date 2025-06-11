import { useTranslations as useNextIntlTranslations } from 'next-intl';

export function useTranslation() {
  const t = useNextIntlTranslations();
  
  return {
    t,
    // Helpers específicos para diferentes seções
    hero: useNextIntlTranslations('hero'),
    navigation: useNextIntlTranslations('navigation'),
    experience: useNextIntlTranslations('experience'),
    projects: useNextIntlTranslations('projects'),
    tech: useNextIntlTranslations('tech'),
    contact: useNextIntlTranslations('contact'),
    footer: useNextIntlTranslations('footer'),
    common: useNextIntlTranslations('common'),
  };
} 