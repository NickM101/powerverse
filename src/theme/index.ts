import {StyleSheet} from 'react-native';
import {borderRadii} from './designSystem';
import {heightPixel, widthPixel} from './normalize';
import {typographyStyles} from './designTypography';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: heightPixel(50),
    minWidth: widthPixel(120),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: borderRadii.medium,
    paddingHorizontal: 16,
    ...typographyStyles.button,
  },
});
