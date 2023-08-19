import {Dimensions, PixelRatio} from 'react-native';
import {typographyStyles} from './Typography';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const spacing = {
  xxs: 4,
  xs: 8,
  sm: 16,
  md: 24,
  lg: 32,
  xl: 40,
  xxl: 48,
};

const borders = {
  thin: 1,
  medium: 2,
  thick: 4,
};

const borderRadii = {
  small: 4,
  medium: 8,
  large: 16,
};

const layout = {
  containerPadding: 16,
  gutter: 16,
  columns: 12,
};

const colors = {
  light: {
    background: '#F5D7DB',
    text: '#333333',
    primary: '#1B3358',
    secondary: '#473E66',
    accent: '#F1916D',
  },
  dark: {
    background: '#06142E',
    text: '#FFFFFF',
    primary: '#F5D7DB',
    secondary: '#473E66',
    accent: '#F1916D',
  },
};

const widthBaseScale = SCREEN_WIDTH / 414;
const heightBaseScale = SCREEN_HEIGHT / 896;

function normalize(size: number, based = 'width') {
  if (typeof based !== 'string') {
    throw new Error('The `based` parameter must be of type `string`.');
  }

  const newSize =
    based === 'height' ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

//for width  pixel
const widthPixel = (size: number) => {
  return normalize(size, 'width');
};
//for height  pixel
const heightPixel = (size: number) => {
  return normalize(size, 'height');
};
//for font  pixel
const fontPixel = (size: number) => {
  return heightPixel(size);
};
//for Margin and Padding vertical pixel
const pixelSizeVertical = (size: number) => {
  return heightPixel(size);
};
//for Margin and Padding horizontal pixel
const pixelSizeHorizontal = (size: number) => {
  return widthPixel(size);
};

export {
  colors,
  layout,
  borderRadii,
  borders,
  spacing,
  typographyStyles,
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
};
