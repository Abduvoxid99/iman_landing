import { Box, Container, Typography, Button } from '@material-ui/core'
import React from 'react'
import cls from './ItParkBlog.module.scss'

export default function ItParkBlog({ handleClose }) {
  return (
    <div className={cls.root}>
      <Container className={cls.container} style={{ maxWidth: '1250px' }}>
        <Box className={cls.box}>
          <Typography className={cls.title}>
            IMAN will represent Uzbekistan at It-Park <br /> World 2020/21
          </Typography>
          <Typography className={cls.content}>
            Results of the national stage of the EWC competition!
          </Typography>
          <img
            src='https://it-park.uz/storage/images/news/normal/HWTxpGaR8EaYVg69QxGMpdeFCgyzOjXiN3bJ16Ch.jpeg'
            alt='blogPage'
          />
          <Typography className={cls.dateText}>
            30 ноября 2020, 09:48
          </Typography>
          <Typography className={cls.textContent}>
            On August 27, 2020, the national stage of the Entrepreneurship World
            Cup competition took place, where participants presented their
            projects. <br /> <br />
            Recall that IT Park, together with The Global Educational &
            Leadership Foundation (tGELF, India) and the Ministry of Innovative
            Development of the Republic of Uzbekistan, recently announced
            recruitment for the national stage of the Entrepreneurship World Cup
            2020 (EWC) competition in Uzbekistan. <br /> <br />
            Projects that passed to the final of the national stage: <br />{' '}
            <br />
            - GameFall (media and entertainment); <br />
            - Coozin (EdTech / Teaching and Talent, Foodtech and Agtech); <br />
            - RQ (Fintech); <br />
            - Telework asia (Big Data / AI); <br />
            - Iman (Fintech); <br />
            - Proteus (Energy and Sustainability);
            <br />
            - Delivera (Mobility / Transport); <br />
            - Sogdia -Clean Technologies, Foodtech and Agtech; <br />
            - Modern technologies for processing raw materials of plant
            materials by the example of Amaranth (Agriculture); <br />
            - ModMe - Big Data / AI, EdTech / Education and Talents.
            <br /> <br /> Following the results of the national stage, the
            following projects became the winners: <br />
            <br /> - Mark Zubov - Iman; <br />
            - Nematov Bobur - Proteus. <br />
            matov Bobur - Proteus. The winners of the national stage will
            receive 100 thousand US dollars in the form of access to online
            subscriptions to partner services and a chance to get to the
            international selection, following which they will have the
            opportunity to present their project at the global final in October
            2020 and compete for a prize fund in the amount of more than $ 1
            million in cash, as well as $ 70 million in bonuses and special
            offers from partners. <br /> <br />
            We congratulate all the participants on the victory and wish them
            good luck in developing their projects.
            <br />
          </Typography>
        </Box>
      </Container>
    </div>
  )
}
