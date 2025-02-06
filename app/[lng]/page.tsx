import Link from 'next/link'
import { Trans } from 'react-i18next/TransWithoutContext'
import { languages, fallbackLng } from '../i18n/settings'
import { useTranslation } from '../i18n'
import Image from 'next/image'
import Header from './components/Header'
import Footer from './components/Footer'
import { CountdownTimer } from './components/CountdownTimer'
import { calculateTimeLeft } from "./utils/calculateTimeLeft"


const targetDate = new Date("2028-04-14T08:59:10Z")
const initialTimeLeft = calculateTimeLeft(targetDate)
export default async function Page({ params }: {
  params: Promise<{ lng: string; }>;
}) {
  let { lng } = await params
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(lng)

  return (
    <>

<Header lng={lng} />

      <main className="flex flex-col items-center justify-center min-h-screen p-4">




      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome to Bitcoin Block Reward Halving Countdown</h1>
        <CountdownTimer initialTimeLeft={initialTimeLeft} />
      </div>



      

        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <h2 className="text-2xl font-bold mt-4 text-center">
          <Trans t={t} i18nKey="welcome">
            Welcome to Next.js v13 <small className="text-sm">appDir</small> and i18next
          </Trans>
        </h2>
        <div className="w-full mt-6">
          <p className="text-center">
            <Trans t={t} i18nKey="blog.text">
              Check out the corresponding <a href={t('blog.link')} className="text-blue-500 hover:underline">blog post</a> describing this example.
            </Trans>
          </p>
          <a href={t('blog.link')} className="flex justify-center mt-4">
            <img
              className="w-1/2"
              alt="next 13 blog post"
              src="https://locize.com/blog/next-app-dir-i18n/next-app-dir-i18n.jpg"
            />
          </a>
        </div>
        <hr className="my-5 w-11/12 border-t border-gray-300" />
        <div className="flex space-x-4">
          <Link href={`/${lng}/second-page`}>
            <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              {t('to-second-page')}
            </button>
          </Link>
          <Link href={`/${lng}/client-page`}>
            <button type="button" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              {t('to-client-page')}
            </button>
          </Link>
        </div>
      </main>
      <Footer />
      
    </>
  )
}
