import { Box, Container, Typography } from '@material-ui/core'
import React, { useEffect, useRef } from 'react'
import cls from './OurTeam.module.scss'
import ReactSlick from 'react-slick'
import { useTranslation, i18n } from 'next-i18next'
import Person from './Person'
import Dialogs from '../Dialog'
import { ArrowLeft, ArrowRight } from '../SlickCarouselArrows/Arrows'
import { useRouter } from 'next/router'

export default function OurTeam() {
  const [getData, setGetData] = React.useState('')
  const { t } = useTranslation('common')
  const router = useRouter()
  const myRef = useRef(null)

  useEffect(() => {
    console.log(router.query)
    if (router.query.team === 'true') {
      var el = document.getElementById('team')
      window.scrollTo({
        top: el.getBoundingClientRect().top + 400,
        behavior: 'smooth',
      })
    }
  }, [router.query])

  const responsive = [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        dots: false,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        dots: false,
      },
    },
  ]
  const TemproryData = [
    {
      name: t('Rustam Rahmatov'),
      image: './images/rustam.jpg',
      position: t('CEO'),
      link: 'https://www.linkedin.com/in/rustamrahmatov/',
      about: t('CEO_about'),
      text: t('CEO_text'),
      content: t('CEO_text_second'),
      vizyon: t('Rustam Rahmatov vision'),
      ocupation: t('Rustam Rahmatov ocupation'),
      aims: '',
    },
    {
      name: t('Mark Zubov'),
      image: './images/yodgor.jpg',
      position: t('CFO'),
      link: 'https://www.linkedin.com/in/markzubov/',
      about: t('CFO_about'),
      text: t('CFO_text'),
      content: t('CFO_text_second'),
      vizyon: t('Mark Zubov vision'),
      ocupation: t('Mark Zubov ocupation'),
      aims: '',
    },
    {
      name: t('Suna Park'),
      image: './images/suno.jpg',
      position: t('EDU'),
      link: 'https://www.linkedin.com/in/suna-julia-park-ab1a0613/',
      about: t('EDU_about'),
      text: t('EDU_text'),
      content: t('EDU_text_second'),
      vizyon: t('EDU_vizyon'),
      ocupation: t('Suna Park ocupation'),
      aims: '',
    },
    {
      name: t('Timur Khodjaev'),
      image: './images/xojayev.jpg',
      position: t('NMMC'),
      link: 'https://www.linkedin.com/in/%D1%82%D0%B8%D0%BC%D1%83%D1%80-%D1%85%D0%BE%D0%B4%D0%B6%D0%B0%D0%B5%D0%B2-2665a0105/',
      about: t('NMMC_about'),
      text: t('NMMC_text'),
      content: t('NMMC_text_second'),
      vizyon: t('Timur Khodjaev vision'),
      ocupation: t('Timur Khodjaev ocupation'),
      aims: '',
    },
    {
      name: t('Dr Ziyaad Mahomed'),
      image: './images/drziyad.jpg',
      position: t('SHARIA'),
      link: 'https://www.linkedin.com/in/dr-ziyaad-mahomed-2309a516/',
      about: t('SHARIA_about'),
      text: t('SHARIA_text'),
      content: t('SHARIA_text_second'),
      vizyon: t('Dr Ziyaad Mahomed vision'),
      ocupation: t('Dr Ziyaad Mahomed ocupation'),
      aims: '',
    },
    // {
    //   name: t('Rustam Shamuradov'),
    //   image: './images/shomurodov.jpg',
    //   position: t('PRODUCT'),
    //   link: 'https://www.linkedin.com/in/rustam-shamuradov-85284330/',
    //   about: t('PRODUCT_about'),
    //   text: t('PRODUCT_text'),
    //   content: t('PRODUCT_text_second'),
    //   vizyon: t('Rustam Shamuradov vision'),
    //   ocupation: t('Rustam Shamuradov ocupation'),
    //   aims: '',
    // },

    // {
    //   name: t('Hondamir Nusrathujaev'),
    //   image: './images/khondamir.jpg',
    //   position: t('IDB'),
    //   link: 'https://www.linkedin.com/in/hondamir-nusrathujaev-247861150/',
    //   about: t('IDB_about'),
    //   text: t('IDB_text'),
    //   content: t('IDB_text_second'),
    //   vizyon: t('Hondamir Nusrathujaev vision'),
    //   ocupation: t('Hondamir Nusrathujaev ocupation'),
    //   aims: '',
    // },
    {
      name: t('Timur Salikhbaev'),
      image: '/images/timur.jpg',
      position: t('LAW'),
      link: 'https://www.linkedin.com/in/timur-salikhbaev-5375881a8/',
      about: t('LAW_about'),
      text: t('LAW_text'),
      content: t('LAW_text_second'),
      vizyon: t('Timur Salikhbaev vision'),
      ocupation: t('Timur Salikhbaev ocupation'),
      aims: '',
    },
    {
      name: t('Dilshod Tairov'),
      image:
        'https://thumb.tildacdn.com/tild3031-6163-4562-b061-646464643131/-/cover/360x350/center/center/-/format/webp/5646.png',
      position: t('RM'),
      link: 'https://www.linkedin.com/in/dilshod-tairov-739579214/',
      about: t('RM_about'),
      text: t('RM_text'),
      content: t('RM_text_second'),
      vizyon: t('RM_aims'),
      ocupation: '',
      aims: '',
    },
    {
      name: t('Arjun Batra'),
      image: './images/arjun.jpg',
      position: t('TECH'),
      link: 'https://www.linkedin.com/in/batraarjun/',
      about: t('TECH_about'),
      text: t('TECH_text'),
      content: t('TECH_text_second'),
      vizyon: t('Arjun Batra vision'),
      ocupation: t('Arjun Batra ocupation'),
      aims: '',
    },
    {
      name: t('A.J. Davidson'),
      image: '/images/AJ.jpg',
      position: t('TECH'),
      link: 'https://www.linkedin.com/in/a-j-davidson-4b4ab184/',
      about: t('AJ_about'),
      text: t('AJ_text'),
      content: t('AJ_text_second'),
      vizyon: '',
      ocupation: '',
      aims: '',
    },
    {
      name: t('Izzat Shukurov'),
      image: '/images/izat.jpg',
      position: t('MARKET'),
      link: 'https://www.linkedin.com/in/izzatshukurov/',
      about: t('MARKET_about'),
      text: t('MARKET_text'),
      content: t('MARKET_text_second'),
      vizyon: t('Izzat Shukurov vision'),
      ocupation: t('Izzat Shukurov ocupation'),
      aims: '',
    },
    {
      name: t('Abdullo Hidoyatov'),
      image:
        'https://thumb.tildacdn.com/tild3831-6334-4134-a465-373564323865/-/cover/720x720/center/top/-/format/webp/noroot_1.png',
      position: t('IT'),
      link: 'https://www.linkedin.com/in/abdullo-hidoyatov-9b456b7b/',
      about: t('IT_about'),
      text: t('IT_text'),
      content: t('IT_text_second'),
      vizyon: t('IT_aims'),
      ocupation: '',
      aims: '',
    },

    {
      name: t('Kirill Sevastyanenko'),
      image: '/images/kiril.jpg',
      position: t('AI'),
      link: 'https://www.linkedin.com/in/kirillseva/',
      about: t('AI_about'),
      text: t('AI_text'),
      content: t('AI_text_second'),
      vizyon: '',
      ocupation: t('Kirill Sevastyanenko ocupation'),
      aims: '',
    },

    {
      name: t('Yodgor Gafurov'),
      image:
        'https://thumb.tildacdn.com/tild3166-3735-4261-b736-393637666639/-/cover/360x350/center/center/-/format/webp/6345768.png',
      position: t('FA'),
      link: 'https://www.linkedin.com/in/yodgor-gafurov/',
      about: t('FA_about'),
      text: t('FA_text'),
      content: t('FA_text_second'),
      vizyon: '',
      ocupation: '',
      aims: '',
      // aims: t('FA_aims'),
    },
    {
      name: t('Djakhongir Makhamov'),
      image: './images/DJ.png',
      position: t('DJ'),
      link: 'https://www.linkedin.com/in/djahon/',
      about: t('DJ_about'),
      text: t('DJ_text'),
      content: t('DJ_text_second'),
      vizyon: t('DJ_vizyon'),
      ocupation: t('DJ_ocup'),
      aims: t('DJ_aims'),
    },

    {
      name: t('Indira Akramova'),
      image: './images/indira.jpg',
      position: t('PM'),
      link: 'https://www.linkedin.com/in/indira-akramova-ergasheva-58aa3b51/',
      about: t('PM_about'),
      text: t('PM_text'),
      content: t('PM_text_second'),
      vizyon: t('PM_vizyon'),
      ocupation: t('PM_ocup'),
      aims: '',
    },
  ]

  return (
    <div ref={myRef} className={cls.root} id='team'>
      <Container className={cls.container}>
        <Box className={cls.box}>
          <Typography className={cls.title}>{t('Our team')}</Typography>
          <ReactSlick
            {...{
              dots: true,
              infinite: true,
              speed: 500,
              slidesToShow: 3,
              slidesToScroll: 1,
              responsive,
              // autoplay: true,
              // autoplaySpeed: 2000,
              nextArrow: <ArrowRight styles='nextButton' />,
              prevArrow: <ArrowLeft styles='prevButton' />,
            }}
            className='team-slider'
          >
            {TemproryData.map((data, ind) => (
              <Person setGetData={setGetData} data={data} key={ind} />
            ))}
          </ReactSlick>
        </Box>
      </Container>
      <Dialogs data={getData} />
    </div>
  )
}
