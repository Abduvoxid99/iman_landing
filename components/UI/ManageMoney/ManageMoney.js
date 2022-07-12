import { Container, Grid } from '@material-ui/core'
import React from 'react'
import { useTranslation } from 'next-i18next'
import cls from './ManageMoney.module.scss'
import {
  LazyLoadImage,
  trackWindowScroll,
} from 'react-lazy-load-image-component'
import { useWidth } from '../../../utils/useWidth'

function ManageMoney() {
  const { t } = useTranslation('common')
  return (
    <div className={cls.root}>
      <Container>
        <Grid container spacing={useWidth() < 800 ? 3 : 6}>
          <Grid item xs={12} sm={6} md={8}>
            <div className={cls.leftCard}>
              <h1>{t('Manage your money with an app')}</h1>
              <div className={cls.imgs}>
                <a
                  href='https://apps.apple.com/us/app/iman-investor/id1572636618'
                  target='_blank'
                >
                  <div className={cls.img}>
                    <img src='/images/app-store.png' alt='App store' />
                  </div>
                </a>
                <a
                  href='https://play.google.com/store/apps/details?id=udevs.iman_invest&hl=ru&gl=US'
                  target='_blank'
                >
                  <div className={cls.img}>
                    <img src='/images/google-play.png' alt='Google Play' />
                  </div>
                </a>
              </div>
              <div className={cls.qr}>
                <img src='/images/oneclick.svg' alt='QR CODE' />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className={cls.rightImg}>
              <LazyLoadImage
                src='/images/iphone.png'
                alt='iphone'
                effect='blur'
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default trackWindowScroll(ManageMoney)
