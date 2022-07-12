import { Container } from '@material-ui/core'
import { useTranslation } from 'next-i18next'
import React from 'react'
import cls from './CultureAboutTitle.module.scss'

export default function CultureAboutTitle() {
  const { t } = useTranslation()
  return (
    <Container>
      <div className={cls.box}>
        <h1>{t('culture title')}</h1>
        <span>{t('culture text')}</span>
      </div>
    </Container>
  )
}
