import {StyleSheet, TextStyle} from 'react-native';
import {fontPixel, pixelSizeHorizontal} from './normalize';

// Define fonts
const rubik_bold = 'Rubik-Bold';
const rubik_medium = 'Rubik-Medium';
const rubik_regular = 'Rubik-Regular';
const rubik_italic = 'Rubik-Italic';

// Define typography styles
interface TypographyStyles {
  display: TextStyle;
  headline: TextStyle;
  title: TextStyle;
  subtitle: TextStyle;
  label: TextStyle;
  subtext: TextStyle;
  button: TextStyle;
}

export const typographyStyles: TypographyStyles = StyleSheet.create({
  display: {
    fontFamily: rubik_bold,
    fontSize: fontPixel(64),
    lineHeight: 69,
    color: 'white',
  },
  headline: {
    fontFamily: rubik_bold,
    fontSize: fontPixel(26),
    lineHeight: 36,
    marginBottom: pixelSizeHorizontal(5),
    color: 'white',
  },
  title: {
    fontFamily: rubik_bold,
    fontSize: fontPixel(20),
    lineHeight: 24,
    color: 'white',
  },
  subtitle: {
    fontFamily: rubik_regular,
    fontSize: fontPixel(16),
    lineHeight: 24,
    color: 'white',
  },
  label: {
    fontFamily: rubik_medium,
    fontSize: fontPixel(16),
    lineHeight: 24,
    color: 'white',
  },
  subtext: {
    fontFamily: rubik_italic,
    fontSize: fontPixel(14),
    fontWeight: '400',
    lineHeight: 13,
    color: 'white',
  },
  button: {
    fontFamily: rubik_bold,
    fontSize: fontPixel(16),
    letterSpacing: 0,
    color: 'white',
    textAlign: 'center',
  },
});
