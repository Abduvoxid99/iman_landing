import React from 'react'
import cls from './YouTubeVideo.module.scss'
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined'
import { i18n } from 'next-i18next'
import { useRouter } from 'next/router'

export default function YouTubeVideo({
  openVideo,
  handleCloseVideo,
  ruLink,
  engLink,
  uzLink,
}) {
  const router = useRouter()
  return (
    openVideo && (
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
              ? engLink
              : router.locale === 'ru'
              ? ruLink
              : uzLink
          }
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
        ></iframe>
      </div>
    )
  )
}
