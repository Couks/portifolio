"use client";

import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface LanguageToggleProps {
  showLabel?: boolean;
}

export function LanguageToggle({ showLabel = false }: LanguageToggleProps) {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const toggleLanguage = () => {
    const newLocale = locale === 'pt' ? 'en' : 'pt';
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  const labelVariants = {
    hidden: { 
      width: 0, 
      opacity: 0,
      marginLeft: 0
    },
    visible: { 
      width: "auto", 
      opacity: 1,
      marginLeft: 8,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        duration: 0.3
      }
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleLanguage}
        className="flex items-center text-sm font-medium"
        aria-label="Alternar idioma"
      >
        <Globe className="h-4 w-4" />
        <AnimatePresence mode="wait">
          {showLabel && (
            <motion.span
              variants={labelVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="uppercase font-semibold text-sm whitespace-nowrap overflow-hidden"
            >
              {locale === 'pt' ? 'EN' : 'PT'}
            </motion.span>
          )}
        </AnimatePresence>
      </Button>
    </motion.div>
  );
} 