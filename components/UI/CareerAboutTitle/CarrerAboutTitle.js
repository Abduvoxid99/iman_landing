import { Container } from '@material-ui/core'
import { useTranslation } from 'next-i18next'
import React from 'react'
import cls from './CareerAboutTitle.module.scss'

export default function CareerAboutTitle() {
  const { t } = useTranslation()
  return (
    <Container>
      <div className={cls.box}>
        <h1>{t('career title')}</h1>
        <span
          dangerouslySetInnerHTML={{
            __html: t('career text'),
          }}
        ></span>
      </div>
    </Container>
  )
}
