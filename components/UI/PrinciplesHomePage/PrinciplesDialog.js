import React, { useEffect, useRef } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'
import { useTranslation, i18n } from 'next-i18next'
import CloseIcon from '@material-ui/icons/Close'
import Link from 'next/link'
import { Grid } from '@material-ui/core'

export default function Dialogs({ data }) {
  const { t } = useTranslation('common')

  const [open, setOpen] = React.useState(false)
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const firstrRender = useRef(true)
  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  useEffect(() => {
    if (!firstrRender.current) {
      setOpen(true)
    }
    firstrRender.current = false
  }, [data])

  return (
    <div className='dialog'>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby='responsive-dialog-title'
        className='dialog-ourteam'
      >
        <div className='close-icon'>
          <CloseIcon onClick={handleClose} />
        </div>

        <div className='dialog-row'>
          <Grid container spacing={3}>
            <Grid item md={5} xs={12}>
              <div className='dialog-image'>
                <img src={data.image} alt={data.name} />
              </div>
            </Grid>
            {/* <Grid item md={7} xs={12}>
              <div className='dialog-content'>
                <DialogContent>
                  <DialogContentText
                    style={{
                      color: '#000',
                      fontWeight: '600',
                      fontSize: '32px',
                      lineHeight: '39px',
                    }}
                  >
                    {data?.name}
                  </DialogContentText>
                  <DialogContentText
                    style={{
                      color: '#777',
                      fontSize: '18px',
                      lineHeight: '22px',
                      fontWeight: '300',
                    }}
                  >
                    {data?.position}
                  </DialogContentText>
                  <DialogContentText
                    style={{
                      fontSize: '16px',
                      color: ' #666666',
                      lineHeight: '1.55',
                      fontWeight: '300',
                    }}
                    // dangerouslySetInnerHTML={{__html: data?.about}}
                  >
                    {data?.about}
                  </DialogContentText>
                  <DialogContentText
                    style={{
                      fontSize: '16px',
                      color: ' #666666',
                      lineHeight: '1.55',
                      fontWeight: '300',
                    }}
                    // dangerouslySetInnerHTML={{__html: data?.text}}
                  >
                    {data?.text}
                  </DialogContentText>
                  <DialogContentText
                    style={{
                      fontSize: '16px',
                      color: ' #666666',
                      lineHeight: '1.55',
                      fontWeight: '300',
                    }}
                    // dangerouslySetInnerHTML={{__html: data?.content}}
                  >
                    {data?.content}
                  </DialogContentText>
                  <DialogContentText
                    style={{
                      fontSize: '16px',
                      color: ' #666666',
                      lineHeight: '1.55',
                      fontWeight: '300',
                      paddingTop: '30px',
                    }}
                    // dangerouslySetInnerHTML={{__html: data?.vizyon ? `${t('vizyon')}: ${data?.vizyon}` : ''}}
                  >
                    {data?.vizyon ? `${t('vizyon')}: ${data?.vizyon}` : ''}
                  </DialogContentText>
                  <DialogContentText
                    style={{
                      fontSize: '16px',
                      color: '#666666',
                      lineHeight: '1.55',
                      fontWeight: '300',
                    }}
                    // dangerouslySetInnerHTML={{__html: data?.ocupation ? `${t('Education')}: ${data?.ocupation}` : ''}}
                  >
                    {data?.ocupation
                      ? `${t('Education')}: ${data?.ocupation}`
                      : ''}
                  </DialogContentText>
                  <DialogContentText
                    style={{
                      fontSize: '16px',
                      color: ' #666666',
                      lineHeight: '1.55',
                      fontWeight: '300',
                    }}
                    // dangerouslySetInnerHTML={{__html: data?.aims ? `${t('aim')}: ${data?.aims}` : ''}}
                  >
                    {data?.aims ? `${t('aims')}: ${data?.aims}` : ''}
                  </DialogContentText>
                  <DialogContentText
                    style={{
                      cursor: 'pointer',
                      color: '#00cbb1',
                      fontSize: '14px',
                    }}
                  >
                    <Link href={data?.link}>
                      <a target='_blank'>{data?.link}</a>
                    </Link>
                  </DialogContentText>
                </DialogContent>
              </div>
            </Grid> */}
          </Grid>
        </div>
      </Dialog>
    </div>
  )
}
8
