import { Container, Typography, Grid } from '@material-ui/core'
import React from 'react'
import { useTranslation } from 'next-i18next'
import cls from './Profit.module.scss'
import AssessmentIcon from '@material-ui/icons/Assessment'
import WorkIcon from '@material-ui/icons/Work'
import TodayIcon from '@material-ui/icons/Today'
import PlaceIcon from '@material-ui/icons/Place'

export default function Profit() {
  const { t } = useTranslation('common')

  return (
    <div className={cls.root}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <div className={cls.count}>
              <AssessmentIcon />
              <Typography className={cls.countTitle}>
                {t('profit_text')}
              </Typography>
              <Typography className={cls.content}>
                {t('Average portfolio size')}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div className={cls.count}>
              <WorkIcon />
              <Typography className={cls.countTitle}>
                {t('profit_text_second')}
              </Typography>
              <Typography className={cls.content}>
                {t('Investment_volume')}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div className={cls.count}>
              <TodayIcon />
              <Typography className={cls.countTitle}>
                18 {t('months')}{' '}
              </Typography>
              <Typography className={cls.content}>
                {t('Average investment period')}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div className={cls.count}>
              <PlaceIcon />
              <Typography className={cls.countTitle}>
                20 {t('countries')}{' '}
              </Typography>
              <Typography className={cls.content}>
                {t('Geography of IMAN investors')}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
