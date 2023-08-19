import {StyleSheet, TextStyle} from 'react-native';

// Define fonts
const merriweather = 'Merriweather-Regular';
const sourceSansPro = 'SourceSansPro-Regular';

// Define typography styles
interface TypographyStyles {
  heading1: TextStyle;
  heading2: TextStyle;
  bodyText: TextStyle;
}

export const typographyStyles: TypographyStyles = StyleSheet.create({
  heading1: {
    fontFamily: merriweather,
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
  },
  heading2: {
    fontFamily: merriweather,
    fontSize: 20,
    lineHeight: 28,
    fontWeight: 'bold',
  },
  bodyText: {
    fontFamily: sourceSansPro,
    fontSize: 16,
    lineHeight: 24,
  },
});
