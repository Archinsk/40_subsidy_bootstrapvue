module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',

    pluginOptions: {
      i18n: {
        locale: 'ru',
        fallbackLocale: 'en',
        localeDir: 'locales',
        enableInSFC: false,
        enableBridge: false
      }
    }
}
