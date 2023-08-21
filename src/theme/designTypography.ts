import {StyleSheet, TextStyle} from 'react-native';

// Define fonts
const merriweather_bold = 'Merriweather-Bold';
const merriweather_regular = 'Merriweather-Regular';
const SourceSans3_regular = 'SourceSans3-Regular';

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
    fontFamily: merriweather_regular,
    fontSize: 26,
    lineHeight: 36,
    fontWeight: 'bold',
  },
  title: {
    fontFamily: merriweather_regular,
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
  },
  regular: {
    fontFamily: merriweather_regular,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 'bold',
  },
  small: {
    fontFamily: SourceSans3_regular,
    fontSize: 16,
    lineHeight: 24,
  },
  caption: {
    fontFamily: SourceSans3_regular,
    fontSize: 16,
    lineHeight: 24,
  },
  button: {
    fontFamily: merriweather_bold,
    fontSize: 16,
    lineHeight: 24,
  },
});
