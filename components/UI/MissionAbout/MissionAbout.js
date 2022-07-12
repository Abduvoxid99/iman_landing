import { Box, Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { Invest, Manage, Register } from '../Icons'
import cls from './MissionAbout.module.scss'
import { useTranslation, i18n } from 'next-i18next'

export default function MissionAbout() {
  const { t } = useTranslation('common')

  return (
    <div className={cls.background}>
      <div className={cls.root}>
        <Container>
          <Typography className={cls.title}>{t('mission title 2')}</Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <div className={cls.rightBox}>
                <img src='/images/mission1.png' alt='Mission' />
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <ul>
                <li>
                  <div className={cls.number}>1</div>
                  <div className={cls.info}>
                    <span>{t('mission title 2 title 1')}</span>
                    <span>{t('mission title 2 text 1')}</span>
                  </div>
                </li>
                <li>
                  <div className={cls.number}>2</div>
                  <div className={cls.info}>
                    <span>{t('mission title 2 title 2')}</span>
                    <span>{t('mission title 2 text 2')}</span>
                  </div>
                </li>
                <li>
                  <div className={cls.number}>3</div>
                  <div className={cls.info}>
                    <span>{t('mission title 2 title 3')}</span>
                    <span>{t('mission title 2 text 3')}</span>
                  </div>
                </li>
              </ul>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  )
}
