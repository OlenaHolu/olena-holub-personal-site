const nextTranslate = require('next-translate-plugin');

module.exports = nextTranslate({
  i18n: {
    locales: ['en', 'es', 'ru', 'uk'],
    defaultLocale: 'en',
  },
});
