import React from 'react';
import {View} from 'react-native';
import FontText from '../FontText';
import i18n from '../../translations/i18n-js';
import colors from '../../globals/colors';

export const getTranslation = (translationKey, replace = null) => {
  const text = i18n.t(translationKey);

  if (replace === null) {
    if (text.includes('{}')) {
      return text.split('{}');
    }
    return [text];
  } else if (replace) {
    const regex = new RegExp(Object.keys(replace).join('|'), 'g');

    const replacedText = text.replace(regex, function(matched) {
      return replace[matched];
    });

    if (replacedText.includes('{}')) {
      return replacedText.split('{}');
    }
    return [replacedText];
  }
};

export const ShowTranslation = ({
  color,
  weight,
  size,
  textDecoLine,
  children,
  style,
  highlightWeight,
  highlightTextDecoLine,
  highlightSize,
}) => {
  let renderText;

  if (Array.isArray(children)) {
    renderText = children.map((item, index) => {
      if (item.includes('/')) {
        const splitText = item.split('/');
        console.log('splitText', splitText);
        let fontColor;
        const {
          gray900,
          gray800,
          gray700,
          gray600,
          gray500,
          gray400,
          gray300,
          gray200,
          gray100,
          white,
          CNTMint,
          CNTDarkGreen,
          CNTMidGreen,
          CNTLightGreen,
          CNTPurple,
          lightPurple,
          callingGreen,
          notiRed,
          bannerBlue,
          toastGray,
        } = colors;
        switch (splitText[0]) {
          case 'gray900':
            fontColor = gray900;
            break;
          case ' gray800':
            fontColor = gray800;
            break;
          case 'gray700':
            fontColor = gray700;
            break;
          case 'gray600':
            fontColor = gray600;
            break;
          case 'gray900':
            fontColor = gray900;
            break;
          case ' gray800':
            fontColor = gray800;
            break;
          case 'gray700':
            fontColor = gray700;
            break;
          case 'gray600':
            fontColor = gray600;
            break;
          case '  gray500':
            fontColor = gray500;
            break;
          case 'gray400':
            fontColor = gray400;
            break;
          case 'gray300':
            fontColor = gray300;
            break;
          case 'gray200':
            fontColor = gray200;
            break;
          case 'gray100':
            fontColor = gray100;
            break;
          case 'white':
            fontColor = white;
            break;
          case 'CNTMint':
            fontColor = CNTMint;
            break;
          case 'CNTDarkGreen':
            fontColor = CNTDarkGreen;
            break;
          case 'CNTMidGreen':
            fontColor = CNTMidGreen;
            break;
          case 'CNTLightGreen':
            fontColor = CNTLightGreen;
            break;
          case 'CNTPurple':
            fontColor = CNTPurple;
            break;
          case 'lightPurple':
            fontColor = lightPurple;
            break;
          case 'callingGreen':
            fontColor = callingGreen;
            break;
          case 'notiRed':
            fontColor = notiRed;
            break;
          case 'bannerBlue':
            fontColor = bannerBlue;
            break;
          case 'toastGray':
            fontColor = toastGray;
            break;
        }

        return (
          <FontText
            style={{
              textDecorationLine: highlightTextDecoLine
                ? highlightTextDecoLine
                : 'none',
            }}
            size={highlightSize ? highlightSize : size}
            weight={highlightWeight}
            color={fontColor}>
            {splitText[1]}
          </FontText>
        );
      } else {
        return (
          <FontText
            style={{
              textDecorationLine: textDecoLine ? textDecoLine : 'none',
            }}
            weight={weight}
            size={size}
            color={color}>
            {item}
          </FontText>
        );
      }
    });
  } else {
    renderText = (
      <FontText
        style={{
          textDecorationLine: textDecoLine ? textDecoLine : 'none',
        }}
        weight={weight}
        size={size}
        color={color}>
        {children}
      </FontText>
    );
  }

  return (
    <FontText
      style={Object.assign(
        {},
        {
          alignItems: 'center',
        },
        style,
      )}>
      {renderText}
    </FontText>
  );
};
