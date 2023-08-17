import React from 'react';
import {View} from 'react-native';
import FlatListCard from '../../components/FlatListCard';
// import {superheroApi} from '../../services/superheroapi';

const HomeScreen = () => {
  // const idsToFetch = [489, 260, 289, 522, 538, 546, 70];

  // const data = superheroApi.endpoints.getCharacters.useQuery(idsToFetch);

  return (
    <View className="flex">
      <FlatListCard />
    </View>
  );
};

export default HomeScreen;
