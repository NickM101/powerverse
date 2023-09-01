import {Dimensions, PixelRatio} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const widthBaseScale = SCREEN_WIDTH / 414;
const heightBaseScale = SCREEN_HEIGHT / 896;

export function normalize(size: number, based = 'width') {
  if (typeof based !== 'string') {
    throw new Error('The `based` parameter must be of type `string`.');
  }

  const newSize =
    based === 'height' ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

//for width  pixel
export const widthPixel = (size: number) => {
  return normalize(size, 'width');
};
//for height  pixel
export const heightPixel = (size: number) => {
  return normalize(size, 'height');
};
//for font  pixel
export const fontPixel = (size: number) => {
  return heightPixel(size);
};
//for Margin and Padding vertical pixel
export const pixelSizeVertical = (size: number) => {
  return heightPixel(size);
};
//for Margin and Padding horizontal pixel
export const pixelSizeHorizontal = (size: number) => {
  return widthPixel(size);
};
