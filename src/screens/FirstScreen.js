import React from 'react';
import colors from '../globals/colors';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {ShowTranslation, getTranslation} from '../components/ShowTranslation';

const FirstScreen = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={{borderBottomWidth: 1}}>
          <Text> {'No highlight text in translation file'}</Text>
          <ShowTranslation
            style={{marginHorizontal: 20, marginVertical: 20}}
            color={colors.bannerBlue}>
            {getTranslation('testShowTranslation.terms3JustText')}
          </ShowTranslation>
        </View>

        <View style={{borderBottomWidth: 1}}>
          <Text> {'Highlight text uses color, text underline, bold'}</Text>
          <ShowTranslation
            style={{
              marginVertical: 20,
              marginHorizontal: 20,
            }}
            highlightTextDecoLine={'underline'}
            highlightWeight={'b'}>
            {getTranslation('testShowTranslation.termsHighlightText')}
          </ShowTranslation>
        </View>

        <View style={{borderBottomWidth: 1}}>
          <Text>
            {
              'Highlight is a replaced text and uses color, text underline, bold, non-highlight text uses color only'
            }
          </Text>
          <ShowTranslation
            style={{
              marginVertical: 20,
              marginHorizontal: 20,
            }}
            highlightTextDecoLine={'underline'}
            color={colors.CNTDarkGreen}
            size={14}
            weight={'r'}
            highlightWeight={'b'}>
            {getTranslation('testShowTranslation.terms4ReplaceHighlight', {
              '{v}': 'Connecting',
            })}
          </ShowTranslation>
        </View>

        <View style={{borderBottomWidth: 1}}>
          <Text>
            {
              'Only uses ShowTranslation component does not use getTranslation()'
            }
          </Text>
          <ShowTranslation
            color={colors.CNTMint}
            weight={'b'}
            size={30}
            style={{
              marginVertical: 20,
              marginHorizontal: 30,
              justifyContent: 'center',
              textAlign: 'center',
            }}>
            {
              'this is a second test please work hahaha hello my name is show translation'
            }
          </ShowTranslation>
        </View>

        <View style={{borderBottomWidth: 1}}>
          <Text>{'When highlight text is a button'}</Text>
          <View
            style={{
              marginTop: 20,
              marginHorizontal: 30,
              flexDirection: 'row',
              alignSelf: 'center',
              alignItems: 'center',
            }}>
            <ShowTranslation>
              {getTranslation('testShowTranslation.terms2Button.line1')}
            </ShowTranslation>
            <TouchableOpacity>
              <ShowTranslation
                highlightWeight={'b'}
                highlightTextDecoLine={'underline'}>
                {getTranslation('testShowTranslation.terms2Button.line2')}
              </ShowTranslation>
            </TouchableOpacity>
            <ShowTranslation>
              {getTranslation('testShowTranslation.terms2Button.line3')}
            </ShowTranslation>
            <TouchableOpacity>
              <ShowTranslation
                highlightWeight={'b'}
                highlightTextDecoLine={'underline'}>
                {getTranslation('testShowTranslation.terms2Button.line4')}
              </ShowTranslation>
            </TouchableOpacity>
            <ShowTranslation>
              {getTranslation('testShowTranslation.terms2Button.line5')}
            </ShowTranslation>
          </View>
          <ShowTranslation style={{marginBottom: 20, alignSelf: 'center'}}>
            {getTranslation('testShowTranslation.terms2Button.line6')}
          </ShowTranslation>
        </View>
      </SafeAreaView>
    </>
  );
};

export default FirstScreen;
