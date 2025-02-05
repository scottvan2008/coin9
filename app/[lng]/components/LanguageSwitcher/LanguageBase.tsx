import { i18n } from 'i18next'
import Link from 'next/link'
import { Trans } from 'react-i18next/TransWithoutContext'
import { languages } from '../../../i18n/settings'

export const LanguageBase = ({ i18n, lng, path = '' }: { i18n: i18n, lng: string, path?: string }) => {
  const t = i18n.getFixedT(lng, 'footer')
  return (
    <div className="bg-gray-800 text-white py-4 px-6">
      <Trans i18nKey="languageSwitcher" t={t}>
        {/* @ts-expect-error Trans interpolation */}
        Switch from <strong className="font-semibold">{{lng}}</strong> to:{' '}
      </Trans>
      <div className="inline-flex gap-2">
        {languages
          .filter((l) => lng !== l)
          .map((l) => (
            <Link
              key={l}
              href={`/${l}${path}`}
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md transition-colors duration-200"
            >
              {l}
            </Link>
          ))}
      </div>
    </div>
  )
}