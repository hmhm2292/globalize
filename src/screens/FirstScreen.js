import React from 'react';
import colors from '../globals/colors';
import {SafeAreaView, View, Text, StatusBar, ScrollView} from 'react-native';
import FontText from '../components/FontText';
import {ShowTranslation, getTranslation} from '../components/ShowTranslation';

const FirstScreen = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ShowTranslation
          style_={{
            marginBottom: 10,
            textAlign: 'center',
            marginHorizontal: 100,
          }}
          color={colors.CNTDarkGreen}
          size={14}
          highlightSize={16}
          highlightWeight={'b'}
          highlightTextDecoLine={'underline'}>
          {getTranslation('testShowTranslation.terms', {'{v}': 'testyp300'})}
        </ShowTranslation>
        <ShowTranslation color={colors.CNTDarkGreen} weight={'b'} size={20}>
          {'hihi this is a test'}
        </ShowTranslation>
      </SafeAreaView>
    </>
  );
};

export default FirstScreen;
