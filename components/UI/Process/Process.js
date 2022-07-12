import React from 'react'
import cls from './Process.module.scss'
import { Box, Container, Grid, Typography } from '@material-ui/core'
import { useTranslation, i18n } from 'next-i18next'

export default function Process() {
  const { t } = useTranslation('common')
  return (
    <div className={cls.root}>
      {/* <img
        className={`bgColor right ${cls.figure}`}
        src='/images/bg-icon.png'
      /> */}
      <Container className={cls.container}>
        <div className={cls.row}>
          <h1 className={cls.title}>{t('Investment process')}</h1>
          <div className={cls.card}>
            <Grid container spacing={3}>
              <Grid item md={3} xs={12} sm={6}>
                <div className={cls.childCard}>
                  <p className={cls.titleContent}>{t('Account set-up')}</p>
                  <p className={cls.content}>{t('download_IMAN')}</p>
                  <div className={cls.img}>
                    <img src='/images/process1.png' alt='Account' />
                  </div>
                </div>
              </Grid>
              <Grid item md={3} xs={12} sm={6}>
                <div className={cls.childCard}>
                  <p className={cls.titleContent}>{t('create_portfolio')}</p>
                  <p className={cls.content}>{t('Select_investment')}</p>
                  <div className={cls.img}>
                    <img src='/images/process2.png' alt='Investment' />
                  </div>
                </div>
              </Grid>
              <Grid item md={3} xs={12} sm={6}>
                <div className={cls.childCard}>
                  <p className={cls.titleContent}>{t('currency')}</p>
                  <p className={cls.content}>
                    {t('Deposit your funds in national or foreign currency')}
                  </p>
                  <div className={cls.img}>
                    <img src='/images/process3.png' alt='Currency' />
                  </div>
                </div>
              </Grid>
              <Grid item md={3} xs={12} sm={6}>
                <div className={cls.childCard}>
                  <p className={cls.titleContent}>{t('Generating profit')}</p>
                  <p className={cls.content}>{t('you_can_either')}</p>
                  <div className={cls.img}>
                    <img src='/images/process4.png' alt='Statistic' />
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </Container>
    </div>
  )
}
