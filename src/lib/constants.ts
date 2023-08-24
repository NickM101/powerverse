import {Dimensions} from 'react-native';

export interface ComicPublishers {
  name: string;
  image: string;
}

export const Window_Width = Dimensions.get('window').width;

export const publishers: ComicPublishers[] = [
  {
    name: 'Marvel Studio',
    image: '',
  },
  {
    name: 'DC Comics',
    image: '',
  },
  {
    name: 'Dark Horse Comics',
    image: '',
  },
  {
    name: 'Image Comics',
    image: '',
  },
  {
    name: 'Lucasfilm Studio',
    image: '',
  },
];
