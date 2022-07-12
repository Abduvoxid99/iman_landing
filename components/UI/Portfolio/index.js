import { Box, Container, Typography } from '@material-ui/core'
import React from 'react'
import cls from './index.module.scss'
import { useTranslation, i18n } from 'next-i18next'
import {
  LazyLoadImage,
  trackWindowScroll,
} from 'react-lazy-load-image-component'

function Portfolio({ imgUrl, name, personImg, text, position, linked }) {
  const { t } = useTranslation()
  return (
    <div className={cls.size}>
      <div className={cls.card}>
        <h1 className={cls.contentTitle}>{t('invester_review')}</h1>
        <p className={cls.content}>{text}</p>
        <div className={cls.cardFooter}>
          <LazyLoadImage
            className={cls.img}
            src={personImg}
            alt={name}
            effect='blur'
          />

          <div className={cls.cardContent}>
            <p className={cls.footerTitle}>{name}</p>
            <p className={cls.footerContent}>{position}</p>
            {linked && (
              <a href={linked} target='_blank' className={cls.contentBio}>
                <img alt='linked' src='/images/icons/linked.svg' />
                Go to Linkedin
              </a>
            )}
          </div>
        </div>
      </div>
      <div className={cls.rightCard}>
        <div className={cls.img}>
          <LazyLoadImage src={imgUrl} alt='info' effect='blur' />
        </div>
      </div>
    </div>
  )
}

export default trackWindowScroll(Portfolio)
