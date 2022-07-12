import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from '../next-i18next.config.js'
import CultureAboutTitle from '../components/UI/CultureAboutTitle/CultureAboutTitle'
import CultureAboutTeam from '../components/UI/CultureAboutTeam/CultureAboutTeam'
import { useTranslation } from 'next-i18next'

export default function Culture() {
  const { t } = useTranslation()
  return (
    <div className='culture-page'>
      <CultureAboutTitle />
      <CultureAboutTeam
        firstBlog={true}
        title={t('culture about title 1')}
        text1={t('culture about text 1')}
        text2={t('culture about text 2')}
        img='/images/culture/culture1.jpg'
      />
      <CultureAboutTeam
        title={t('culture about title 2')}
        text1={t('culture about text 2 1')}
        text2={t('culture about text 2 2')}
        img='/images/culture/culture2.jpg'
        left={true}
      />
      <CultureAboutTeam
        title=''
        text1={t('culture about text 3 1')}
        text2={''}
        img='/images/culture/culture3.jpg'
        line={true}
      />
      <CultureAboutTeam
        title=''
        text1={t('culture about text 4 1')}
        text2={''}
        img='/images/culture/culture4.jpg'
        left={true}
      />
      <CultureAboutTeam
        title=''
        text1={t('culture about text 5 1')}
        text2={''}
        img='/images/culture/culture5.jpg'
        line={true}
      />
      <CultureAboutTeam
        title=''
        text1={t('culture about text 6 1')}
        text2={t('culture about text 6 2')}
        img='/images/culture/culture6.jpg'
        left={true}
      />
      <CultureAboutTeam
        title=''
        text1={t('culture about text 7 1')}
        text2={t('culture about text 7 2')}
        img='/images/culture/culture7.jpg'
        line={true}
      />
      <CultureAboutTeam
        title=''
        text1={t('culture about text 8 1')}
        img='/images/culture/culture8.jpg'
        left={true}
        title2={t('culture about title 8')}
      />
      <CultureAboutTeam
        text1={t('culture about text 9 1')}
        text2={t('culture about text 9 2')}
        img='/images/culture/culture9.jpg'
        className='culture-blog'
        line={true}
        footer={true}
      />
    </div>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'], nextI18NextConfig)),
  },
})
