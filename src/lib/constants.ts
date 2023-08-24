import {Dimensions, ImageProps} from 'react-native';

export interface ComicPublishers {
  id: string;
  name: string;
  image: ImageProps;
}

export const Window_Width = Dimensions.get('window').width;

export const publishers: ComicPublishers[] = [
  {
    id: '1',
    name: 'Marvel Studio',
    image: require('../../assets/images/marvel.png'),
  },
  {
    id: '2',
    name: 'DC Comics',
    image: require('../../assets/images/dc_comics.png'),
  },
  {
    id: '3',
    name: 'Dark Horse Comics',
    image: require('../../assets/images/dark_horse.png'),
  },
  {
    id: '4',
    name: 'Image Comics',
    image: require('../../assets/images/image_comics.png'),
  },
  {
    id: '5',
    name: 'Lucasfilm Studio',
    image: require('../../assets/images/lucasfilm.png'),
  },
];
