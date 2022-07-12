import { Box, Container, Typography, Button } from '@material-ui/core'
import React from 'react'
import cls from './Details.module.scss'
import Link from 'next/link'
import { useTranslation, i18n } from 'next-i18next'

export default function Details() {
  const { t } = useTranslation('common')
  return (
    <div className={cls.root}>
      <Container className={cls.container} style={{ maxWidth: '1250px' }}>
        <Box className={cls.box}>
          <div className={cls.row}>
            <div className={cls.leftCard}>
              <Box className={cls.invest}>
                <Typography
                  style={{
                    paddingBottom: '12px',
                    paddingLeft: '14px',
                    fontSize: '18px',
                  }}
                >
                  0%
                </Typography>
                <div className={cls.dots}></div>
                <Typography className={cls.lastText}>{t('started')}</Typography>
              </Box>
              <Box className={cls.secondInvest}>
                <Typography
                  style={{
                    paddingBottom: '12px',
                    fontSize: '22px',
                    color: '#01CAB0',
                    fontWeight: '600',
                    lineHeight: '38px',
                  }}
                >
                  31%
                </Typography>
                <div className={cls.emptyDots}></div>
                <Typography className={cls.last}>{t('invested')}</Typography>
              </Box>
            </div>
            {/*  */}
            <div className={cls.rightCard}>
              <Typography className={cls.contentTitle}>
                {t('invester_review')}
              </Typography>
              <Typography className={cls.content}>{t('iman_aims')}</Typography>
              <div className={cls.cardFooter}>
                <img src='images/ceo.png' alt='Dilshod Zufarov' />
                <div className={cls.cardContent}>
                  <Typography className={cls.footerTitle}>
                    Dilshod Zufarov
                  </Typography>
                  <Typography className={cls.footerContent}>
                    {t('ceo')}
                  </Typography>
                  <Typography className={cls.contentBio}>
                    <Link href={'https://www.linkedin.com/in/dzufarov/'}>
                      <a target='_blank' className={cls.link}>
                        linkedin.com/in/dilshodzufarov/
                      </a>
                    </Link>
                  </Typography>
                </div>
              </div>
            </div>
          </div>
          {/* <Box className={cls.button}>
            <Button className={cls.btn}>See more</Button>
          </Box> */}
        </Box>
      </Container>
    </div>
  )
}
