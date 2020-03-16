import React from 'react';

import {SafeAreaView, View, Text, StatusBar} from 'react-native';

import i18n from '../translations/i18n-js';

const FirstScreen = () => {
  console.log(i18n.t);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <Text>{i18n.t('firstPage.hello')}</Text>
          <Text>{i18n.t('firstPage.good morning')}</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default FirstScreen;
