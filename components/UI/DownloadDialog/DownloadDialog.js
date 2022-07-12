import { Dialog, DialogTitle } from '@material-ui/core'
import React from 'react'
import cls from './DownloadDialog.module.scss'
import CloseIcon from '@material-ui/icons/Close'
import { useTranslation } from 'next-i18next'

export default function DownloadDialog({
  handleCloseDowland,
  dowland,
  appStoreLink,
  googlePlayLink,
}) {
  const { t } = useTranslation('common')
  return (
    <Dialog
      open={dowland}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <div className={cls.dialogBox}>
        <CloseIcon onClick={handleCloseDowland} className={cls.icon} />
        <DialogTitle className={cls.dowlandTitle} id='alert-dialog-title'>
          {t('dowland')}
        </DialogTitle>
        <div className={cls.appStore}>
          <div className={cls.logo}>
            <a href={appStoreLink} target='_blank'>
              <div className={cls.img}>
                <img src='/images/app-store.png' alt='App store' />
              </div>
            </a>
            <a href={googlePlayLink} target='_blank'>
              <div className={cls.img}>
                <img src='/images/google-play.png' alt='Google Play' />
              </div>
            </a>
          </div>
          <div className={cls.qr}>
            <img src='/images/oneclick.svg' alt='QR CODE' />
          </div>
        </div>
      </div>
    </Dialog>
  )
}
