import Link from 'next/link'

import { languages, fallbackLng } from '../i18n/settings'
import { useTranslation } from '../i18n'

import Header from './components/Header'
import Footer from './components/Footer'
import { CountdownTimer } from './components/CountdownTimer'
import { calculateTimeLeft } from "./utils/calculateTimeLeft"
import { InfoSection } from "./components/InfoSection"
import { BitcoinStats } from "./components/BitcoinStats"


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


      <InfoSection />
      <BitcoinStats />
      

 

       
       
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
