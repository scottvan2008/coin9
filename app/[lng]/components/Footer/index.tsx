"use client"

import { useEffect, useState } from 'react';
import { useTranslation } from '../../../i18n';
import { FooterBase } from './FooterBase';
import { i18n as I18NextInstance } from 'i18next';


export const Footer = ({ lng, path }: { lng: string; path?: string }) => {
  // const [i18n, setI18n] = useState<any>(null); // State to store i18n data
  const [i18n, setI18n] = useState<I18NextInstance | null>(null);

  
  

  useEffect(() => {
    const fetchTranslation = async () => {
      const { i18n } = await useTranslation(lng, 'footer');
      setI18n(i18n);
    };

    fetchTranslation();
  }, [lng]);

  if (!i18n) return null; // Prevent rendering until i18n is loaded

  return <FooterBase i18n={i18n} lng={lng} path={path} />;
};
