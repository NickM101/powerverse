import {StyleSheet, TextStyle} from 'react-native';
import {fontPixel} from './normalize';

// Define fonts
const rubik_bold = 'Rubik-Bold';
const rubik_medium = 'Rubik-Medium';
const rubik_regular = 'Rubik-Regular';
const rubik_italic = 'Rubik-Italic';

// Define typography styles
interface TypographyStyles {
  headline: TextStyle;
  title: TextStyle;
  body: TextStyle;
  label: TextStyle;
  subtext: TextStyle;
  button: TextStyle;
}

export const typographyStyles: TypographyStyles = StyleSheet.create({
  headline: {
    fontFamily: rubik_bold,
    fontSize: fontPixel(26),
    lineHeight: 36,
  },
  title: {
    fontFamily: rubik_bold,
    fontSize: fontPixel(16),
    lineHeight: 24,
  },
  body: {
    fontFamily: rubik_regular,
    fontSize: fontPixel(16),
    lineHeight: 24,
  },
  label: {
    fontFamily: rubik_medium,
    fontSize: fontPixel(16),
    lineHeight: 24,
  },
  subtext: {
    fontFamily: rubik_italic,
    fontSize: fontPixel(10),
    lineHeight: 13,
  },
  button: {
    fontFamily: rubik_medium,
    fontSize: fontPixel(20),
    letterSpacing: 0,
  },
});
