import React, { useEffect } from 'react'
import { ThemeProvider } from '@material-ui/core'
import { Router } from 'next/router'
import MainLayout from '../components/Layouts/MainLayout'
import NProgress from 'nprogress'
import CssBaseline from '@material-ui/core/CssBaseline'
import 'nprogress/nprogress.css'
import theme from '../theme/index'
import '../styles/globals.scss'
import { appWithTranslation } from 'next-i18next'
import nextI18NextConfig from '../next-i18next.config'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }) {
  NProgress.configure({ showSpinner: false })

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
        <CssBaseline />
      </ThemeProvider>
    </React.Fragment>
  )
}

export default appWithTranslation(MyApp, nextI18NextConfig)
