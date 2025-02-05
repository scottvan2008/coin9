import { useTranslation } from '../../../i18n'
import { FooterBase } from './FooterBase'

export const Footer = async ({ lng, path }: { lng: string; path?: string }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t, i18n } = await useTranslation(lng, 'footer')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  console.log(t) // Example use of t, you can replace it with your actual translation logic

  return <FooterBase i18n={i18n} lng={lng} path={path} />
}