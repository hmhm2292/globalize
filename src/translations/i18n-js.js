import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';

const translationGetters = {
  ko: () => require('./ko.json'),
  ja: () => require('./ja.json'),
};

const fallback = {languageTag: 'ko', isRTL: false};

const {languageTag} =
  RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
  fallback;

i18n.translations = {
  [languageTag]: translationGetters[languageTag](),
};
i18n.fallbacks = true;
i18n.locale = languageTag;

console.log('languageTag', languageTag);
console.log('fallbacks', i18n.fallbacks);
console.log('translations', i18n.translations);
console.log('locale', i18n.locale);

export default i18n;
