import { Box, Container, Typography } from '@material-ui/core'
import React from 'react'
import cls from './PortFolioThird.module.scss'
import Link from 'next/link'
import { useTranslation, i18n } from 'next-i18next'

export default function PortFolioThird() {
  const { t } = useTranslation('common')
  return (
    <div className={cls.root}>
      <div className={cls.bg}>
        <Container className={cls.container} style={{ maxWidth: '1250px' }}>
          <Box className={cls.box}>
            <Box className={cls.row}>
              <div className={cls.size}>
                <div className={cls.card}>
                  <Typography className={cls.contentTitle}>
                    {t('invester_review')}
                  </Typography>
                  <Typography className={cls.content}>
                    {t('text_portfolio_first')}&nbsp;
                    {t('text_portfolio_second')}&nbsp;
                    {t('text_portfolio_third')}
                  </Typography>
                  <div className={cls.cardFooter}>
                    <img
                      className={cls.img}
                      src='images/obidjon.png'
                      alt='Obidjon Ilhomov'
                    />
                    <div className={cls.cardContent}>
                      <Typography className={cls.footerTitle}>
                        {t('obidjon')}
                      </Typography>
                      <Typography className={cls.footerContent}>
                        {t('text_portfolio_about')}
                      </Typography>
                      <Typography className={cls.contentBio}>
                        <Link
                          href={
                            'https://www.linkedin.com/in/nodirbek-yuldashov-acca-b3916930/'
                          }
                        >
                          <a className={cls.link}>
                            {/* linkedin.com/in/nodirbekyuldashev/ */}
                          </a>
                        </Link>
                      </Typography>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className={cls.rightCard}>
                  <Box className={cls.invest}>
                    <Typography
                      style={{
                        paddingBottom: '12px',
                        fontSize: '18px',
                        whiteSpace: 'nowrap',
                        textOverflow: 'clip',
                      }}
                    >
                      UZS 20 {t('mlnn')}
                    </Typography>
                    <div className={cls.dots}></div>
                    <Typography className={cls.lastText}>
                      {t('started')}
                    </Typography>
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
                      UZS 26 {t('mlnn')}
                    </Typography>
                    <div className={cls.emptyDots}></div>
                    <Typography className={cls.last}>
                      {t('invested')}
                    </Typography>
                  </Box>
                </div>
              </div>
            </Box>
          </Box>
        </Container>
      </div>
    </div>
  )
}
