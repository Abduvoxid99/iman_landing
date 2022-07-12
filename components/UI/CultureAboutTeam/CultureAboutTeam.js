import { Container, Grid } from '@material-ui/core'
import React from 'react'
import { useWidth } from '../../../utils/useWidth'
import cls from './CultureAboutTeam.module.scss'

export default function CultureAboutTeam({
  title,
  text1,
  text2,
  img,
  left = false,
  title2 = '',
  className,
  line = false,
  firstBlog = false,
}) {
  return (
    <div className={cls.footerBg}>
      <div
        className={`${left ? '' : cls.leftBlog} ${line ? cls.lineBlog : ''} ${
          cls.blog
        } `}
      >
        <Container>
          <div className={`${cls.box} ${className}`}>
            <Grid
              container
              spacing={useWidth() < 576 ? 3 : 8}
              className={`${left ? cls.positionLeft : ''} ${
                firstBlog ? cls.firstBlog : ''
              }`}
            >
              <Grid item xs={12} sm={6} md={6}>
                <div className={cls.rightBox}>
                  <h1>{title}</h1>
                  {title2 && <h2>{title2}</h2>}
                  {text1 && (
                    <p
                      dangerouslySetInnerHTML={{
                        __html: text1,
                      }}
                    ></p>
                  )}
                  {text2 && (
                    <p
                      dangerouslySetInnerHTML={{
                        __html: text2,
                      }}
                    ></p>
                  )}
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <div className={cls.leftBox}>
                  <img src={img} alt='culture image' />
                </div>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </div>
  )
}
