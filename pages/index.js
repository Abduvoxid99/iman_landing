import About from '../components/UI/About/About'
import Banner from '../components/UI/Banner/Banner'
import Invest from '../components/UI/Invest/Invest'
import Order from '../components/UI/Order/Order'
import PortFolioSlider from '../components/UI/PortFolioSlider/PortFolioSlider'
import Process from '../components/UI/Process/Process'
import Profit from '../components/UI/Profit/Profit'
import Chart from '../components/UI/Chart/Chart'
import OurTeam from '../components/UI/OurTeam/OurTeam'
import ManageMoney from '../components/UI/ManageMoney/ManageMoney'
import Partners from '../components/UI/Partners/Partners'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from '../next-i18next.config.js'

export default function Home() {
  return (
    <div style={{ overflow: 'hidden' }}>
      <Banner />
      <Profit />
      <Invest />
      <About />
      <Order />
      <PortFolioSlider />
      <Process />
      <Chart />
      <ManageMoney />
      <Partners />
      <OurTeam />
      {/* <ContactUs id='contact' /> */}
    </div>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'], nextI18NextConfig)),
  },
})
