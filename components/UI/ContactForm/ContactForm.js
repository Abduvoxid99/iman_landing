// import { Box, Button, Container, Input, Typography } from '@material-ui/core'
// import React from 'react'
// import Link from 'next/link'
// import cls from './ContactForm.module.scss'
// import { Label } from '@material-ui/icons'
// import CloseIcon from '@material-ui/icons/Close'
// import { useTranslation, i18n } from 'next-i18next'

// export default function ContactForm({ handleClose }) {
//   const { t } = useTranslation('common')
//   return (
//     <div className={cls.root}>
//       <Container className={cls.container} style={{ maxWidth: '1250px' }}>
//         <Box className={cls.box}>
//           <div className={cls.row}>
//             <CloseIcon onClick={() => handleClose()} className={cls.icon} />
//             <div className={cls.body}>
//               <Typography className={cls.title}>
//                 {t('have_questions')} <br /> {t('write_to_us')}
//               </Typography>
//               <div className={cls.inputGroup}>
//                 <input type='text' placeholder='Enter your Full name' />
//                 <input
//                   className={cls.text}
//                   type='name'
//                   placeholder='Enter a description'
//                 />
//                 <input type='email' placeholder='Enter E-mail' />
//                 <input type='phone' placeholder='Enter your Phone number' />

//                 <Button className={cls.btn}>{t('send')}</Button>
//               </div>
//             </div>
//           </div>
//         </Box>
//       </Container>
//     </div>
//   )
// }
