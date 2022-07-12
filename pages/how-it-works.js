import React from 'react'
import MissionAbout from '../components/UI/MissionAbout/MissionAbout'
import MissionDetail from '../components/UI/MissionDetail/MissionDetail'
import MissionDetailLeft from '../components/UI/MissionDetailLeft/MissionDetailLeft'
import MissionHomePage from '../components/UI/MissionHomePage'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from '../next-i18next.config.js'

export default function HowItWorks() {
  const { t } = useTranslation()
  return (
    <>
      <MissionHomePage id='missionPage' />
      <MissionAbout />
      <MissionDetail
        btnText1={t('mission download btn')}
        btnText2={t('mission how btn')}
        h1={t('mission title 3 title')}
        title={true}
        ruLink='https://www.youtube.com/embed/geuqjbLdYrA'
        engLink='https://www.youtube.com/embed/geuqjbLdYrA'
        uzLink='https://www.youtube.com/embed/geuqjbLdYrA'
        appStoreLink='https://apps.apple.com/us/app/iman-investor/id1572636618'
        googlePlayLink='https://play.google.com/store/apps/details?id=udevs.iman_invest&hl=ru&gl=US'
        imgUrl='/images/detail.png'
        text={t('mission title 3 text')}
      />
      <MissionDetailLeft
        btnText1={t('mission download btn')}
        btnText2={t('mission how btn')}
        h1={t('mission title 4')}
        imgUrl='/images/mission2.png'
        ruLink='https://www.youtube.com/embed/_N7W2mJvUbI'
        engLink='https://www.youtube.com/embed/_N7W2mJvUbI'
        uzLink='https://www.youtube.com/embed/_N7W2mJvUbI'
        appStoreLink='https://apps.apple.com/uz/app/iman/id1529680147'
        googlePlayLink='https://play.google.com/store/apps/details?id=uz.iman'
        text={t('mission title 4 text')}
      />
      <MissionDetail
        btnText1={t('mission download btn')}
        btnText2={t('mission how btn')}
        h1={t('mission title 5')}
        ruLink='https://www.youtube.com/embed/K3wO0TBlPsM'
        engLink='https://www.youtube.com/embed/JaGqMYthwOY'
        uzLink='https://www.youtube.com/embed/BgXPi773Uto'
        appStoreLink='https://apps.apple.com/uz/app/iman/id1529680147'
        googlePlayLink='https://play.google.com/store/apps/details?id=uz.iman'
        imgUrl='/images/mission3.png'
        text={t('mission title 5 text')}
      />
      <MissionDetailLeft
        btnText1={t('mission start investing')}
        btnText2={t('mission watch video')}
        h1={t('mission title 6')}
        imgUrl='/images/mission4.png'
        appStoreLink='https://apps.apple.com/us/app/iman-investor/id1572636618'
        googlePlayLink='https://play.google.com/store/apps/details?id=udevs.iman_invest&hl=ru&gl=US'
        ruLink='https://www.youtube.com/embed/FzG3V_craVw'
        engLink='https://www.youtube.com/embed/cnmzMvJL1Ws'
        uzLink='https://www.youtube.com/embed/9T2Ea2g5-Ec'
        text={t('mission title 6 text')}
      />
    </>
  )
}
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'], nextI18NextConfig)),
  },
})
