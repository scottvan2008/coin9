"use client"

import { useEffect, useState } from 'react';
import { useTranslation } from '../../../i18n'; // Your custom useTranslation
import { FooterBase } from './FooterBase';
import { i18n as I18NextInstance } from 'i18next';

export const Footer = ({ lng, path }: { lng: string; path?: string }) => {
  const [i18n, setI18n] = useState<I18NextInstance | null>(null);

  useEffect(() => {
    const loadTranslations = async () => {
      const { i18n } = await useTranslation(lng, 'footer'); // Use the custom useTranslation
      setI18n(i18n);
    };

    loadTranslations();
  }, [lng]);

  if (!i18n) return null; // Prevent rendering until i18n is loaded

  return <FooterBase i18n={i18n} lng={lng} path={path} />;
};