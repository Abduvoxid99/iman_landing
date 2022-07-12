import { Box, Button, Container, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import cls from './Banner.module.scss'
import ContactForm from '../ContactForm/ContactForm'
import { useTranslation } from 'next-i18next'
import StopSharpIcon from '@material-ui/icons/StopSharp'
import Fade from 'react-reveal/Fade'
import DownloadDialog from '../DownloadDialog/DownloadDialog'
import YouTubeVideo from '../YouTubeVideo/YouTubeVideo'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import { route } from 'next/dist/next-server/server/router'
import { useRouter } from 'next/router'
import { useWidth } from '../../../utils/useWidth'
export default function Banner() {
  const [contact, setContact] = useState(false)
  const [openVideo, setOpenVideo] = useState(false)
  const [dowland, setDowland] = useState(false)
  const router = useRouter()
  const handleOpenDowland = () => {
    setDowland(true)
  }
  const handleCloseDowland = () => {
    setDowland(false)
  }

  const handleClose = () => {
    setContact(false)
  }
  const handleOpenVideo = () => {
    setOpenVideo(true)
  }
  const handleCloseVideo = () => {
    setOpenVideo(false)
  }

  const { t } = useTranslation('common')

  return (
    <div className={cls.root}>
      <Container className={cls.container}>
        <Box className={cls.row}>
          <Fade left>
            <div className={cls.leftCard}>
              <Typography className={cls.title}>
                {t('faith driven investments')}
              </Typography>
              <Typography className={cls.content}>
                <FiberManualRecordIcon className={cls.shapeSquare} />{' '}
                <span className={cls.bannerText}>{t('banner_text')}</span>{' '}
              </Typography>
              <br />

              <Typography className={cls.content}>
                <FiberManualRecordIcon
                  className={`${cls.shapeSquare} ${cls.secondShape}`}
                />
                {/* <span className={cls.bannerText}> */}
                {t('banner_text_second')}
                {/* </span> */}
              </Typography>
              <br />

              <Typography className={cls.content}>
                <FiberManualRecordIcon
                  className={`${cls.shapeSquare} ${cls.thirdShape}`}
                />
                <span className={cls.bannerThird}>
                  {t('banner_text_third')}
                </span>
              </Typography>
              <br />

              <Typography className={cls.content}>
                <FiberManualRecordIcon
                  className={`${cls.shapeSquare} ${cls.fourthShape}`}
                />
                {t('Quarterly profits')}
              </Typography>
              <Typography className={cls.content}>
                <FiberManualRecordIcon
                  className={`${cls.shapeSquare} ${cls.fourthShape}`}
                />
                {t('moment_text')}
              </Typography>
              <div className={cls.allBtn}>
                <Button
                  onClick={() => {
                    handleOpenDowland()
                  }}
                  size='large'
                >
                  {t('Start investing')}
                </Button>
                <Button
                  size='large'
                  onClick={handleOpenVideo}
                  variant='outlined'
                >
                  {t('watch video')}
                </Button>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className={cls.rightCard}>
              <div className={cls.child} id='tvBorder'>
                <video
                  playsInline
                  className={cls.imanVideo}
                  loop
                  autoPlay
                  muted
                >
                  <source
                    src={`/images/video${router.locale}1.mp4`}
                    type='video/mp4'
                  />
                </video>
              </div>
            </div>
          </Fade>
        </Box>

        {contact ? <ContactForm handleClose={handleClose} /> : ''}
        <DownloadDialog
          handleCloseDowland={handleCloseDowland}
          dowland={dowland}
          appStoreLink='https://apps.apple.com/us/app/iman-investor/id1572636618'
          googlePlayLink='https://play.google.com/store/apps/details?id=udevs.iman_invest&hl=ru&gl=US'
        />
        <YouTubeVideo
          openVideo={openVideo}
          handleCloseVideo={handleCloseVideo}
          ruLink='https://www.youtube.com/embed/FzG3V_craVw'
          engLink='https://www.youtube.com/embed/cnmzMvJL1Ws'
          uzLink='https://www.youtube.com/embed/9T2Ea2g5-Ec'
        />
      </Container>
    </div>
  )
}
