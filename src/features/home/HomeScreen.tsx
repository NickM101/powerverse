import React from 'react';
import {FlatList, StyleSheet, View, Text} from 'react-native';
import FlatListCard from '../../components/FlatListCard';
import {superheroApi} from '../../services/superheroapi';

const HomeScreen = () => {
  const idsToFetch = [489, 260, 289, 522, 538, 546, 70];

  const data = superheroApi.endpoints.getCharacters.useQuery(idsToFetch);

  const renderItem = ({item}) => (
    <FlatListCard
      imageSource={item.image.url}
      text={item.name} item={item.id}    />
  );
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <FlatList
        horizontal
        data={data?.currentData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  flatListContent: {
    paddingHorizontal: 10,
  },
});

export default HomeScreen;
