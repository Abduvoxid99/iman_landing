import React, { useState, useEffect } from 'react'
import { Box, Container, Typography, Slider } from '@material-ui/core'
import cls from './index.module.scss'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import { useTranslation, i18n } from 'next-i18next'
import { calculateEarnings } from '../../../utils/calculator'
import { XAxis, Tooltip, AreaChart, Area, ResponsiveContainer } from 'recharts'
import Fade from 'react-reveal/Fade'

const useStyles = makeStyles((theme) => ({
  root: {
    // width: 300 + theme.spacing(3) * 2,
    width: '100%',
  },
  margin: {
    height: theme.spacing(3),
  },
}))

const PrettoSlider = withStyles({
  root: {
    color: '#00CBB1',
    height: 4,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 4,
    borderRadius: 4,
  },
  rail: {
    height: 4,
    borderRadius: 4,
  },
})(Slider)

export default function Invest() {
  const { t } = useTranslation('common')
  const [value, setValue] = useState(25)
  const [valueMonth, setValueMonth] = useState(3)
  const [years, setYears] = useState(15)
  const [data, setData] = useState([])
  const [investTotal, setInvestTotal] = useState([])
  const [putInvest, setPutInvest] = useState([])
  const [invested, setInvested] = useState([])
  const [currentTooltip, setCurrentTooltip] = useState({})

  // console.log('investTotal=>', investTotal)
  // const invest = [12 * valueMonth * years + value]
  // console.log('invest=>', invest)

  useEffect(() => {
    const result = calculateEarnings(value, valueMonth, years)
    // console.log('result=>', result)
    setInvestTotal(result[0])
    setPutInvest(result[1])
    console.log('use 3')
  }, [value, valueMonth, years])

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleChangeMonth = (event, newValue) => {
    setValueMonth(newValue)
  }
  const handleChangeYears = (event, newValue) => {
    setYears(newValue)
  }

  // console.log('investTotal =>', investTotal)
  // console.log(parseInt(years))

  const classes = useStyles()

  useEffect(() => {
    const array1 = investTotal.map((el, ind) => ({
      name:
        Math.floor(ind / 12) > 0 && ind + 1 !== putInvest.length
          ? ''
          : Math.floor(ind / 12),
      Total_earned: el.toString(),
      tooltip: Math.floor(ind / 12),
    }))
    setData(array1.filter((el, index) => index % 12 === 0))
    console.log('use 3')
  }, [investTotal])

  useEffect(() => {
    const array2 = putInvest.map((el, ind) => ({
      name:
        Math.floor(ind / 12) > 0 && ind + 1 !== putInvest.length
          ? ''
          : Math.floor(ind / 12),
      Total_invested: el.toString(),
      tooltip: Math.floor(ind / 12),
    }))
    setInvested(array2.filter((el, index) => index % 12 === 0))
    console.log('use 3')
  }, [investTotal])
  // console.log('invested=>', invested[0].name)
  // console.log('data=>', data)

  const investedNumber = (12 * years * valueMonth + value) * 1000000

  function orderYears() {
    if (years === 0) {
      return t('starting_year')
    } else if (years === 1) {
      return t('year')
    } else if (years <= 4) {
      return t('fourth_year')
    } else if (years === 21) {
      return t('year')
    } else if (years === 22) {
      return t('fourth_year')
    } else if (years === 23) {
      return t('fourth_year')
    } else if (years === 24) {
      return t('fourth_year')
    } else if (years === 31) {
      return t('year')
    } else if (years === 32) {
      return t('fourth_year')
    } else if (years === 33) {
      return t('fourth_year')
    } else if (years === 34) {
      return t('fourth_year')
    }
    return t('let')
  }
  // console.log('currentTooltip', currentTooltip)

  return (
    <div className={cls.root} id='invest'>
      <Container className={cls.container} style={{ maxWidth: '1250px' }}>
        <Box className={cls.box}>
          <div className={cls.row}>
            <Fade left>
              <div className={cls.leftCard}>
                <Typography className={cls.title}>
                  {t('How to become a millionaire with IMAN?')}
                </Typography>
                <Typography className={cls.content}>
                  {t(
                    'Did you know that you can earn over 1 mln USD* in 18 years by investing 25 mln UZS today and as little as UZS 3 million every month?'
                  )}
                </Typography>
                <div className={cls.rangeSlider}>
                  <div className={cls.flex}>
                    <Typography className={cls.childTitle}>
                      {t('initial investment')}
                    </Typography>
                    <Typography className={cls.childContent}>
                      {' '}
                      {new Intl.NumberFormat('us-US', {
                        maximumSignificantDigits: 10,
                      }).format(value)}{' '}
                      {t('mlnn')}
                    </Typography>
                  </div>
                  <div className={classes.root}>
                    <PrettoSlider
                      valueLabelDisplay='off'
                      aria-label='pretto slider'
                      value={value}
                      onChange={handleChange}
                      max={100}
                      step={1}
                    />
                    <div className={classes.margin} />
                  </div>
                </div>
                {/*  */}
                <div className={cls.rangeSlider}>
                  <div className={cls.flex}>
                    <Typography className={cls.childTitle}>
                      {t('monthly investment')}
                    </Typography>
                    <Typography className={cls.childContent}>
                      {new Intl.NumberFormat('us-US', {
                        maximumSignificantDigits: 10,
                      }).format(valueMonth)}{' '}
                      {t('mlnn')}
                    </Typography>
                  </div>
                  <div className={classes.root}>
                    <PrettoSlider
                      valueLabelDisplay='off'
                      aria-label='pretto slider'
                      value={valueMonth}
                      onChange={handleChangeMonth}
                      max={100}
                      min={0}
                      step={1}
                    />
                    <div className={classes.margin} />
                  </div>
                </div>
                {/*  */}
                <div className={cls.rangeSlider}>
                  <div className={cls.flex}>
                    <Typography className={cls.childTitle}>
                      {t('investment term')}
                    </Typography>
                    <Typography className={cls.childContent}>
                      {years} {orderYears()}
                    </Typography>
                  </div>
                  <div className={classes.root}>
                    <PrettoSlider
                      valueLabelDisplay='off'
                      aria-label='pretto slider'
                      value={years}
                      onChange={handleChangeYears}
                      max={40}
                      min={1}
                      step={1}
                    />
                    <div className={classes.margin} />
                  </div>
                </div>
                <div className={cls.contentSlider}>
                  <Typography className={cls.text}>
                    {t('content_slider')}
                  </Typography>
                </div>
              </div>
            </Fade>
            {/*  */}
            <Fade right>
              <div className={cls.rightCard}>
                {/* <div>
                <h2>Line Example</h2>
                <Line data={data} width={400} height={400} />
              </div> */}
                {/* <img src='./images/lineCalc.png' alt='' /> */}
                <div className={cls.upCard}>
                  <Typography className={cls.cardTitle}>
                    {/* {currentTooltip?.year === 0 ? t('starting_year') : t('in')} */}
                    {t('in')}&nbsp;
                    {currentTooltip.active ? currentTooltip.year : years} &nbsp;
                    {orderYears()}
                  </Typography>
                  <div className={cls.flexx}>
                    <div className={cls.child}>
                      <div className={cls.circle} />
                      <div className={cls.rowCard}>
                        <Typography className={cls.cardContent}>
                          &nbsp; {t('Total earned')}:
                        </Typography>
                        <Typography className={cls.cardPrice}>
                          UZS{' '}
                          {currentTooltip.active
                            ? currentTooltip.total
                            : new Intl.NumberFormat('us-US', {
                                maximumSignificantDigits: 8,
                              }).format((investTotal[years * 12] * 1000000) - investedNumber)}
                          {/* {new Intl.NumberFormat('us-US', {
                            maximumSignificantDigits: 8,
                          }).format(investTotal[years * 12] * 1000000)}{' '} */}
                          {/* {t('mlnn')} */}
                          {/* {investTotal[years *12] } */}
                        </Typography>
                      </div>
                    </div>
                  </div>

                  <div className={cls.flexx}>
                    <div className={cls.child}>
                      <div
                        style={{ background: '#396CB8' }}
                        className={cls.circle}
                      />
                      <div className={cls.rowCard}>
                        <Typography className={cls.cardContent}>
                          &nbsp; {t('Total invested')}:
                        </Typography>
                        <Typography className={cls.cardPrice}>
                          UZS{' '}
                          {currentTooltip.active
                            ? currentTooltip.invested
                            : new Intl.NumberFormat('us-US', {
                                maximumSignificantDigits: 5,
                              }).format(investedNumber)}
                          {/* {new Intl.NumberFormat('us-US', {
                            maximumSignificantDigits: 5,
                          }).format(investedNumber)} */}
                          {/* {t('mlnn')} */}
                        </Typography>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={cls.downCard} className='chart-line'>
                  {data?.length && (
                    <ResponsiveContainer
                      className='responsive-chart'
                      width={600}
                      height={350}
                    >
                      <AreaChart className='area-chart' data={data}>
                        <defs>
                          <linearGradient
                            id='colorUv'
                            x1='0'
                            y1='0'
                            x2='0'
                            y2='1'
                          >
                            <stop
                              offset='5%'
                              stopColor='rgba(1, 202, 176, 1)'
                              stopOpacity={0.8}
                            />
                            <stop
                              offset='95%'
                              stopColor='rgba(1, 202, 176, 1)'
                              stopOpacity={0.2}
                            />
                          </linearGradient>
                          <linearGradient
                            id='colorPv'
                            x1='0'
                            y1='0'
                            x2='0'
                            y2='1'
                          >
                            <stop
                              offset='5%'
                              stopColor='rgba(57, 108, 184, 1)'
                              stopOpacity={0.8}
                            />
                            <stop
                              offset='95%'
                              stopColor='rgba(57, 108, 184, 1)'
                              stopOpacity={0.2}
                            />
                          </linearGradient>
                        </defs>
                        <Area
                          dataKey='Total_earned'
                          fillOpacity={1}
                          stackId='1'
                          stroke='#01cab0'
                          fill='url(#colorUv)'
                        />
                        <Area
                          data={invested}
                          dataKey='Total_invested'
                          fillOpacity={1}
                          fill='url(#colorPv)'
                          stroke='##396CB8'
                        />
                        <XAxis
                          dataKey='name'
                          tickLine={false}
                          axisLine={false}
                        />
                        <Tooltip
                          content={
                            <CustomTooltip
                              setCurrentTooltip={setCurrentTooltip}
                              investTotal={investTotal}
                            />
                          }
                        />

                        {/* <YAxis data='100000000' /> */}
                      </AreaChart>
                    </ResponsiveContainer>
                  )}
                </div>
              </div>
            </Fade>
          </div>
        </Box>
      </Container>
    </div>
  )
}
function CustomTooltip(props) {
  const { active, payload, label, investTotal, setCurrentTooltip } = props
  const order = parseInt(label)
  const { t } = useTranslation()

  // console.log('props=>', props)
  const getInvestedEarn = investTotal.filter((el, ind) => ind % 12 === 0)

  const array3 = getInvestedEarn.map((el, ind) => ({
    order: ind,
    amount: el,
  }))

  // console.log(
  //   'array3=>',
  // )
  // console.log(

  //   'invested=>',
  //   invested)

  // console.log('prop=>', props)
  // for (let i = 1; i < 40; i++) {
  //   if (active) {
  //     return (
  useEffect(() => {
    // console.log('Tooltip', payload)
    setCurrentTooltip({
      year: payload?.[0]?.payload?.tooltip,
      total: new Intl.NumberFormat('us-US', {
        maximumSignificantDigits: 8,
      }).format(array3?.[payload[0]?.payload?.tooltip]?.amount * 1000000),
      invested: new Intl.NumberFormat('us-US', {
        maximumSignificantDigits: 5,
      }).format(payload?.[0]?.value * 1000000),
      active: active,
    })
    console.log('use 3')
  }, [payload?.[0]?.payload?.tooltip])
  return (
    active && (
      <div className='tooltip'>
        <h4 style={{ color: '#fff' }}>
          {payload[0]?.payload?.tooltip || ''}
          &nbsp;
          {label === 0 ? t('starting_year') : t('let')}
        </h4>

        <p>
          {t('Total earned')}: UZS{' '}
          {new Intl.NumberFormat('us-US', {
            maximumSignificantDigits: 8,
          }).format(array3[payload[0]?.payload?.tooltip]?.amount * 1000000)}
        </p>
        <p>
          {t('Total invested')}: UZS &nbsp;
          {new Intl.NumberFormat('us-US', {
            maximumSignificantDigits: 5,
          }).format(payload[0]?.value * 1000000)}
        </p>
      </div>
    )
  )
  //   )
  // }
  // return null
  // }
}
