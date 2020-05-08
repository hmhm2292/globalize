import React from 'react';
import {Text} from 'react-native';
import i18n from '../../translations/i18n-js';
import colors from '../../globals/colors';

export const getTranslation = (translationKey, replace = null) => {
  const text = i18n.t(translationKey);
  const curlyBrackets = '{}';
  const emptyString = '';

  if (replace === null) {
    if (text.includes(curlyBrackets)) {
      return text.split(curlyBrackets);
    }
    return text;
  } else if (replace) {
    const regex = new RegExp(Object.keys(replace).join('|'), 'g');
    const replacedText = text.replace(regex, function(matched) {
      return replace[matched];
    });

    if (replacedText.includes(curlyBrackets)) {
      const bracketsIncluded = replacedText.split(curlyBrackets);
      if (bracketsIncluded.includes(emptyString)) {
        return bracketsIncluded.filter(string => string !== emptyString);
      } else {
        return bracketsIncluded;
      }
    }
    return replacedText;
  }
};

export const ShowTranslation = ({
  color,
  weight,
  size,
  children,
  style,
  highlightWeight,
  highlightTextDecoLine,
  highlightSize,
  ...rest
}) => {
  let renderText;
  let textWeight;
  let highlightTextWeight;

  switch (weight) {
    case 'l':
      textWeight = '300';
      break;

    case 'r':
      textWeight = '400';
      break;

    case 'm':
      textWeight = '500';
      break;

    case 'b':
      textWeight = '700';
      break;
  }

  switch (highlightWeight) {
    case 'l':
      highlightTextWeight = '300';
      break;

    case 'r':
      highlightTextWeight = '400';
      break;

    case 'm':
      highlightTextWeight = '500';
      break;

    case 'b':
      highlightTextWeight = '700';
      break;
  }

  if (Array.isArray(children)) {
    renderText = children.map((item, index) => {
      if (item.includes('/')) {
        const colorText = item.split('/');

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
        switch (colorText[0]) {
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
          <Text
            key={index}
            style={{
              textDecorationLine: highlightTextDecoLine
                ? highlightTextDecoLine
                : 'none',
              fontSize: highlightSize ? highlightSize : size,
              fontWeight: highlightTextWeight
                ? highlightTextWeight
                : textWeight,
              color: fontColor ? fontColor : color,
            }}>
            {colorText[1]}
          </Text>
        );
      } else {
        return item;
      }
    });
  } else {
    renderText = children;
  }

  return (
    <Text
      style={Object.assign(
        {},
        {
          color: color,
          fontWeight: textWeight,
          fontSize: size,
        },
        style,
      )}>
      {renderText}
    </Text>
  );
};

ShowTranslation.defaultProps = {color: colors.gray900, weight: 'm'};
