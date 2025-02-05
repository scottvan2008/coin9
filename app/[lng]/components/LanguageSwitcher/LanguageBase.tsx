// import { i18n } from 'i18next';
// import Link from 'next/link';
// import { Trans } from 'react-i18next/TransWithoutContext';
// import { languages, languageNames } from '../../../i18n/settings';

// export const LanguageBase = ({ i18n, lng, path = '' }: { i18n: i18n, lng: string, path?: string }) => {
//   const t = i18n.getFixedT(lng, 'LanguageSwitcher');
//   return (
//     <div className="bg-gray-800 text-white py-4 px-6">
//       <Trans i18nKey="languageSwitcher" t={t}>
//         {/* @ts-expect-error Trans interpolation */}
//         Switch from <strong className="font-semibold">{{lng}}</strong> to:{' '}
//       </Trans>
//       <div className="inline-flex gap-2">
//         {languages
//           .filter((l) => lng !== l)
//           .map((l) => (
//             <Link
//               key={l}
//               href={`/${l}${path}`}
//               className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md transition-colors duration-200"
//             >
//               {languageNames[l] || l} {/* Display the language name if available, otherwise fallback to the code */}
//             </Link>
//           ))}
//       </div>
//     </div>
//   );
// };



import { i18n } from 'i18next';
import Link from 'next/link';
import { languages, languageNames } from '../../../i18n/settings';

export const LanguageBase = ({ lng, path = '' }: { i18n: i18n, lng: string, path?: string }) => {
  return (
    <div className=" text-white py-4 px-6">
      <div className="inline-flex gap-3">
        {languages
          .filter((l) => lng !== l)
          .map((l) => (
            <Link
              key={l}
              href={`/${l}${path}`}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium 
                         hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              {languageNames[l] || l}
            </Link>
          ))}
      </div>
    </div>
  );
};
