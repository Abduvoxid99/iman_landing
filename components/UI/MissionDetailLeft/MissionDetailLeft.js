import { Button, Container, Grid, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import cls from './MissionDetailLeft.module.scss'
import DownloadDialog from '../DownloadDialog/DownloadDialog'
import YouTubeVideo from '../YouTubeVideo/YouTubeVideo'

export default function MissionDetailLeft({
  imgUrl,
  engLink,
  uzLink,
  ruLink,
  appStoreLink,
  googlePlayLink,
  h1,
  btnText1 = 'Cкачать приложение',
  btnText2 = 'Как это работает?',
  text,
}) {
  const [dowland, setDowland] = useState(false)

  const [openVideo, setOpenVideo] = useState(false)

  const handleOpenVideo = () => {
    setOpenVideo(true)
  }
  const handleCloseVideo = () => {
    setOpenVideo(false)
  }
  const handleOpenDowland = () => {
    setDowland(true)
  }
  const handleCloseDowland = () => {
    setDowland(false)
  }
  return (
    <>
      <div className={cls.background}>
        <div className={cls.root}>
          <Container>
            <Grid container spacing={3} className={cls.gridRow}>
              <Grid item xs={12} sm={4} md={5}>
                <div className={cls.leftBox}>
                  <img src={imgUrl} alt='detail' />
                </div>
              </Grid>
              <Grid item xs={12} sm={8} md={7}>
                <div className={cls.rightBox}>
                  <Typography className={cls.title}>{h1}</Typography>
                  <Typography className={cls.text}>{text}</Typography>
                  <div className={cls.allBtn}>
                    <Button
                      onClick={() => {
                        handleOpenDowland()
                      }}
                      size='large'
                      fullWidth
                    >
                      {btnText1}
                    </Button>
                    <Button
                      size='large'
                      onClick={handleOpenVideo}
                      variant='outlined'
                      fullWidth
                    >
                      {btnText2}
                    </Button>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Container>
          <DownloadDialog
            handleCloseDowland={handleCloseDowland}
            dowland={dowland}
            appStoreLink={appStoreLink}
            googlePlayLink={googlePlayLink}
          />
        </div>
      </div>
      <YouTubeVideo
        openVideo={openVideo}
        handleCloseVideo={handleCloseVideo}
        ruLink={ruLink}
        engLink={engLink}
        uzLink={uzLink}
      />
    </>
  )
}
