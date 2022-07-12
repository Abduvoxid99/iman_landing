import { Button, Container, Grid } from '@material-ui/core'
import React from 'react'
import cls from './CareerAboutTeam.module.scss'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { useWidth } from '../../../utils/useWidth'

export default function CareerAboutTeam() {
  const router = useRouter()
  const { t } = useTranslation()
  return (
    <div className={cls.root}>
      <div className={cls.box}>
        <Container>
          <Grid
            container
            spacing={useWidth() < 576 ? 3 : 8}
            className={cls.rows}
          >
            <Grid item xs={12} sm={6} md={6}>
              <div className={cls.rightBox}>
                <h1>{t('team')}</h1>
                <p>{t('career about text')}</p>
                <Button
                  onClick={() => router.push('/culture')}
                  size='large'
                  variant='outlined'
                >
                  {t('career about button')} <ArrowRightAltIcon />
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <h1>{t('team')}</h1>
              <div className={cls.leftBox}>
                <img src='/images/culture/culture1.jpg' alt='culture image' />
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  )
}
