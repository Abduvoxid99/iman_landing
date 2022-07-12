import React from "react";
import nextI18NextConfig from '../next-i18next.config.js'
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import { useTranslation } from 'next-i18next'
import cls from '../styles/404.module.scss'


export default function NotFound() {
    const { t } = useTranslation()
    return (
        <div className={cls.NotFound}>
            <h2 className="">
                {t('page-not-found')}
            </h2>
        </div>
    )
}


export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common'], nextI18NextConfig)),
    },
})
