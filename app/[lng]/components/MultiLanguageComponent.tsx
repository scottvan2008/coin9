// app/[lng]/components/MultiLanguageComponent.tsx
'use client';

import { useTranslation } from '../../i18n/client';

export default function MultiLanguageComponent({ lng }: { lng: string }) {
  const { t } = useTranslation(lng);

  return (
    <div className="p-4 border rounded bg-gray-100 text-center">
      <p className="text-lg font-semibold">{t('sample')}</p>
    </div>
  );
}
