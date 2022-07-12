import { Box, Button, Container, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { DownCircle, Triangle, UpCircle } from '../Icons'
import cls from './MissionOrder.module.scss'
import { useTranslation, i18n } from 'next-i18next'
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined'
import Link from 'next/link'
import { IlustrationSecond } from '../Icons'
import { useRouter } from 'next/router'

export default function MissionOrder() {
  const { t } = useTranslation('common')
  const [openVideo, setOpenVideo] = useState(false)

  const handleOpenVideo = () => {
    setOpenVideo(true)
  }
  const handleCloseVideo = () => {
    setOpenVideo(false)
  }
  const router = useRouter()
  return (
    <div className={cls.root}>
      <div className={cls.bg}>
        <Container className={cls.container} style={{ maxWidth: '1250px' }}>
          <div>
            {openVideo ? (
              <div className={cls.youtube}>
                <CloseOutlinedIcon
                  className={cls.iconClose}
                  onClick={handleCloseVideo}
                  style={{ color: '#fff' }}
                />
                <iframe
                  className={cls.boxVideo}
                  width='560'
                  height='315'
                  src={
                    router.locale === 'en'
                      ? 'https://www.youtube.com/embed/cnmzMvJL1Ws'
                      : router.locale === 'ru'
                      ? 'https://www.youtube.com/embed/FzG3V_craVw'
                      : 'https://www.youtube.com/embed/9T2Ea2g5-Ec'
                  }
                  title='YouTube video player'
                  frameborder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowfullscreen
                ></iframe>
              </div>
            ) : (
              ''
            )}
          </div>
          <Box className={cls.row}>
            <div className={cls.leftCard}>
              <Typography className={cls.title}>
                {t('how_to_become_an_investor')}
              </Typography>
              <Typography className={cls.content}>
                {t('IMAN_is_a_concept')}
                <br /> {t('transparency_according')} <br />{' '}
                {t('Islamic_Finance')}
              </Typography>
              <div className={cls.allBtn}>
                <Link
                  href={
                    'https://payme.uz/fallback/merchant/?id=60880208b8d597ed134d98b0'
                  }
                >
                  <Button className={cls.btn}>{t('invest')}</Button>
                </Link>
                <Button onClick={handleOpenVideo} className={cls.secondBtn}>
                  {t('watch video')}
                </Button>
              </div>
            </div>
            <div className={cls.rightCard}>
              <IlustrationSecond style={{ fontSize: '20px' }} />
            </div>
          </Box>
        </Container>
      </div>
    </div>
  )
}
