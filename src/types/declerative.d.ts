import {FastImageProps} from 'react-native-fast-image';

export type CustomImageStyle = FastImageProps & {
  height: number;
  width: number;
  borderRadius?: number;
};
