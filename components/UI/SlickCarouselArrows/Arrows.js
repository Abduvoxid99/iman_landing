import React from 'react'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import { Box } from '@material-ui/core'

export function ArrowRight(props) {
  const { className, style, onClick, styles } = props
  return (
    <div className={`${className} ${styles || ''}`}>
      <Box style={{ ...style }} onClick={onClick}>
        <ArrowForwardIosIcon />
      </Box>
    </div>
  )
}

export function ArrowLeft(props) {
  const { className, style, onClick, styles } = props
  return (
    <div className={`${className} ${styles || ''}`}>
      <Box style={{ ...style }} onClick={onClick}>
        <ArrowBackIosIcon />
      </Box>
    </div>
  )
}
