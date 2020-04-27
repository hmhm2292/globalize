import React from 'react';
import {Text} from 'react-native';

const FontText = ({family, weight, size, color, children, style, ...rest}) => {
  let fontWeight = '';
  if (!family) {
    switch (weight) {
      case 'l':
        fontWeight = '300';
        break;
      case 'r':
        fontWeight = '400';
        break;

      case 'm':
        fontWeight = '500';
        break;

      case 'b':
        fontWeight = '700';
        break;
    }

    switch (color) {
      case 'black':
        color = 'rgb(34, 34, 34)';
        break;
      case 'warmGrey':
        color = 'rgb(153,153,153)';
        break;
      case 'melon':
        color = 'rgb(255,118,91)';
        break;
      case 'cornflower':
        color = 'rgb(108,77,255)';
    }
  }

  return (
    <Text
      allowFontScaling={false}
      style={Object.assign(
        {},
        {
          fontSize: size,
          color: color,
          fontFamily: 'System',
          fontWeight: fontWeight,
        },
        style,
      )}>
      {children}
    </Text>
  );
};

FontText.defaultProps = {
  family: null,
  weight: 'r',
};

export default FontText;
