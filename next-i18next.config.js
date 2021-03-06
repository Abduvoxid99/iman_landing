const path = require('path')

module.exports = {
  i18n: {
    defaultLocale: 'uz',
    locales: ['uz', 'en', 'ru'],
    localeDetection: false,
  },
  localePath: path.resolve('./public/static/locales'),
}
