"use client";

import { useEffect, useState } from 'react';
import { useTranslation as useCustomTranslation } from '../../../i18n'; // Your custom useTranslation
import { FooterBase } from './FooterBase';
import { i18n as I18NextInstance } from 'i18next';

export const Footer = ({ lng, path }: { lng: string; path?: string }) => {
  const [i18n, setI18n] = useState<I18NextInstance | null>(null);

  useEffect(() => {
    // Handle the asynchronous loading of translations
    const loadTranslations = async () => {
      const { i18n } = await useCustomTranslation(lng, 'footer'); // Using custom useTranslation
      setI18n(i18n);
    };

    loadTranslations();
  }, [lng]); // Re-run effect when language changes

  if (!i18n) return null; // Prevent rendering until i18n is loaded

  return <FooterBase i18n={i18n} lng={lng} path={path} />;
};
