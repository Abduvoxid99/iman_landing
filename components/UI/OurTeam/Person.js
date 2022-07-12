import { Box, Button, Container, Typography } from '@material-ui/core'
import React from 'react'
import cls from './OurTeam.module.scss'
import {
  LazyLoadImage,
  trackWindowScroll,
} from 'react-lazy-load-image-component'

function Person({ data, setGetData }) {
  return (
    <div className={cls.row}>
      <div
        onClick={() => {
          setGetData(data)
        }}
        className={cls.childRow}
      >
        <div className={`object-position ${cls.img}`}>
          <LazyLoadImage src={data.image} alt='Person' effect='blur' />
        </div>
        {/* <img
          style={{ width: '200px', height: '200px', borderRadius: '50%' }}
          src={data.image}
          alt={data.name}
        /> */}
        {/* <Link href={data.link}> */}
        <a target='_blank'>
          <Typography className={cls.personName}>{data.name}</Typography>
          <Typography className={cls.content}>{data.position}</Typography>
        </a>
        {/* </Link> */}
      </div>
    </div>
  )
}

export default trackWindowScroll(Person)
