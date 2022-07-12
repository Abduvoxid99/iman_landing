import { Box, Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import cls from './index.module.scss'
import { useTranslation } from 'next-i18next'

export default function MissionHomePage() {
  const { t } = useTranslation('common')

  return (
    <div className={cls.row}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={7}>
            <div className={cls.leftBox}>
              <Typography className={cls.title}>
                {t('mission title 1')}
              </Typography>
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
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={5}>
            <div className={cls.rightBox}>
              <img src='/images/ilust.png' alt='iMan App' />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
