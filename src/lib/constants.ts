import {Dimensions, ImageProps} from 'react-native';
import comicCharacters from '@lib/comic_characters.json';
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

const shuffledCharacters = () => {
  // Shuffle the array using Fisher-Yates algorithm
  const characters = [...comicCharacters];
  for (let i = comicCharacters.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [comicCharacters[i], comicCharacters[j]] = [
      comicCharacters[j],
      comicCharacters[i],
    ];
  }

  return characters.slice(0, 20).map(character => character.id);
};

export const trending_marvel = ['620'];
export const trending_dc_comics = [];
export const author_picks = shuffledCharacters();
