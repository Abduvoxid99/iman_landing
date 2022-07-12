import React from 'react'
import PrinciplesHomePage from '../components/UI/PrinciplesHomePage/PrinciplesHomePage'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from '../next-i18next.config.js'

export default function Principles() {
  return <PrinciplesHomePage />
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'], nextI18NextConfig)),
  },
})
