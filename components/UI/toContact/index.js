import React, { useState } from 'react'
import { Button, Typography, TextField } from '@material-ui/core'
import cls from './toContact.module.scss'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import Link from 'next/link'
import CloseIcon from '@material-ui/icons/Close'
import { useTranslation, i18n } from 'next-i18next'
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import Flip from 'react-reveal/Flip'
import axios from 'axios'
import { useRouter } from 'next/router'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Slide from '@material-ui/core/Slide'

export default function ToContact() {
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='up' ref={ref} {...props} />
  })
  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // console.log('open=>', open)
  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleCloseModal = () => {
    setOpen(false)
    setShowRegister(false)
    setData({
      // email: '',
      question: '',
      phone: '',
      username: '',
    })
    router.reload()
  }

  const [data, setData] = useState({
    // email: '',
    question: '',
    phone: '',
    username: '',
  })
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    axios
      .post('/api/bot', {
        username: data.username,
        email: data.email,
        phone: data.phone,
        question: data.question,
      })
      .then((res) => {
        setOpen(true)
        // console.log('res=>', res)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => setIsLoading(false))
  }
  // console.log('data', data)

  const { t } = useTranslation('common')
  const [showRegister, setShowRegister] = useState(false)
  const router = useRouter()

  const handleOpen = () => {
    setShowRegister(true)
  }
  const handleClose = () => {
    setShowRegister(false)
  }

  return (
    <>
      <AnimatePresence exit={{ opacity: 0 }}>
        <Flip right>
          <div
            layoutId={'#message'}
            className={cls.to_calculate_btn}
            style={{ display: 'block' }}
          >
            <div className='modal'>
              <Dialog
                open={open}
                TransitionComponent={Transition}
                aria-labelledby='alert-dialog-slide-title'
                aria-describedby='alert-dialog-slide-description'
              >
                <DialogTitle
                  style={{ justifyContent: 'center' }}
                  className='modal-text'
                  id='alert-dialog-slide-title'
                >
                  {t('congratulation')}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id='alert-dialog-slide-description'></DialogContentText>
                </DialogContent>
                <DialogActions style={{ justifyContent: 'center' }}>
                  <Button onClick={handleCloseModal} color='primary'>
                    OK
                  </Button>
                </DialogActions>
              </Dialog>
            </div>

            <span className={cls.icon}>
              {!showRegister ? (
                <ChatBubbleOutlineIcon
                  className={cls.messageIcon}
                  onClick={handleOpen}
                />
              ) : (
                <CloseIcon onClick={handleClose} className={cls.iconClose} />
              )}
            </span>
          </div>
        </Flip>
        {!showRegister ? (
          ''
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            id='message'
            className={cls.row}
          >
            <div className={cls.body}>
              <Typography className={cls.title}>
                {t('have_questions')} <br /> {t('write_to_us')}
              </Typography>
              <div className={cls.inputGroup}>
                <form onSubmit={handleSubmit}>
                  <input
                    required={true}
                    type='text'
                    name='username'
                    placeholder={t('contact_full_name')}
                    value={data.username}
                    onChange={handleChange}
                  />
                  <input
                    required={true}
                    className={cls.text}
                    type='name'
                    name='question'
                    placeholder={t('contact_description')}
                    value={data.question}
                    onChange={handleChange}
                  />
                  {/* <input
                    required={true}
                    type='email'
                    name='email'
                    id='email'
                    placeholder={t('contact_email')}
                    value={data.email}
                    onChange={handleChange}
                  /> */}
                  <input
                    required={true}
                    type='phone'
                    name='phone'
                    placeholder={t('contact_phone_number')}
                    value={data.phone}
                    onChange={handleChange}
                  />
                  <div style={{ display: 'flex' }}>
                    <div>
                      <input
                        type='checkbox'
                        name='checkbox'
                        id='privacy'
                        required={true}
                        style={{
                          width: '30px',
                          minHeight: '19px',
                          marginRight: '10px',
                          marginTop: '5px',
                        }}
                      />
                    </div>
                    <Link
                      href={
                        'https://drive.google.com/file/d/1wlDhcKTrAA1Dk_FffqNaonV61UwwOjcp/view?usp=sharing'
                      }
                    >
                      <a className={cls.textLabel} target='_blank'>
                        <label
                          style={{ fontSize: '14px', cursor: 'pointer' }}
                          htmlFor='privacy'
                        >
                          {t('checkbox_text')}
                        </label>
                      </a>
                    </Link>
                  </div>

                  <Button
                    type='submit'
                    disabled={isLoading}
                    className={cls.btn}
                  >
                    {t('send')}
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
