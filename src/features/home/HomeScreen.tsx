import React from 'react';
import {View} from 'react-native';
import FlatListCard from '../../components/FlatListCard';
// import {superheroApi} from '../../services/superheroapi';

const HomeScreen = () => {
  // const idsToFetch = [489, 260, 289, 522, 538, 546, 70];

  // const data = superheroApi.endpoints.getCharacters.useQuery(idsToFetch);

  return (
    <View>
      <FlatListCard
        imageSource={
          'https://www.befunky.com/images/prismic/82e0e255-17f9-41e0-85f1-210163b0ea34_hero-blur-image-3.jpg?auto=avif,webp&format=jpg&width=896'
        }
        text={'Batman'}
      />
    </View>
  );
};

export default HomeScreen;
