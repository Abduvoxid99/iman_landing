import { Box, Button, Container, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import cls from './ContactUs.module.scss'
import ContactForm from '../ContactForm/ContactForm'
import { useTranslation, i18n } from 'next-i18next'

export default function ContactUs() {
  const { t } = useTranslation('common')
  const [contact, setContact] = useState(false)

  const handleClick = () => {
    setContact(true)
  }
  const handleClose = () => {
    setContact(false)
  }
  return (
    <div className={cls.root}>
      <Box className={cls.body}>
        <Container className={cls.container} style={{ maxWidth: '1250px' }}>
          <Typography className={cls.title}>
            {t('have_questions')} <br />
            {t('write_to_us')}
          </Typography>
          <div className={cls.groupBtn}>
            <Button onClick={handleClick} className={cls.btn}>
              {t('Contact')}
            </Button>
          </div>
          {contact ? <ContactForm handleClose={handleClose} /> : ''}
        </Container>
      </Box>
    </div>
  )
}
