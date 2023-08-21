import {StyleSheet, TextStyle} from 'react-native';

// Define fonts
const merriweather = 'Merriweather-Regular';
const sourceSansPro = 'SourceSansPro-Regular';

// Define typography styles
interface TypographyStyles {
  headline: TextStyle;
  title: TextStyle;
  regular: TextStyle;
  small: TextStyle;
  caption: TextStyle;
  button: TextStyle;
}

export const typographyStyles: TypographyStyles = StyleSheet.create({
  headline: {
    fontFamily: merriweather,
    fontSize: 26,
    lineHeight: 36,
    fontWeight: 'bold',
  },
  title: {
    fontFamily: merriweather,
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
  },
  regular: {
    fontFamily: merriweather,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 'bold',
  },
  small: {
    fontFamily: sourceSansPro,
    fontSize: 16,
    lineHeight: 24,
  },
  caption: {
    fontFamily: sourceSansPro,
    fontSize: 16,
    lineHeight: 24,
  },
  button: {
    fontFamily: merriweather,
    fontSize: 16,
    lineHeight: 24,
  },
});
