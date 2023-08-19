import React, {useCallback} from 'react';
import {FlatList, ListRenderItem, StyleSheet, View} from 'react-native';
import FlatListCard from '../../components/FlatListCard';
import {superheroApi} from '../../services/superheroapi';
import SuperheroResponse from '../../types/superheroTypes';

const ITEM_HEIGHT = 300; // fixed height of item component

const Separator = () => <View style={styles.margin} />;

const HomeScreen = () => {
  const idsToFetch = [489, 260, 289, 522, 538, 546, 70];

  const response = superheroApi.endpoints.getCharacters.useQuery(idsToFetch);

  const renderItem: ListRenderItem<SuperheroResponse> = useCallback(
    ({item}) => (
      <FlatListCard
        imageSource={item.image.url}
        text={item.name}
        item={item.id}
      />
    ),
    [],
  );

  const keyExtractor = useCallback(
    (items: SuperheroResponse) => items.id.toString(),
    [],
  );

  const getItemLayout = useCallback(
    (data: any, index: number) => ({
      length: ITEM_HEIGHT,
      offset: ITEM_HEIGHT * index,
      index,
    }),
    [],
  );

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        initialNumToRender={3}
        data={response?.currentData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsHorizontalScrollIndicator={false}
        alwaysBounceVertical={false}
        getItemLayout={getItemLayout}
        ItemSeparatorComponent={Separator}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatListContent: {
    paddingHorizontal: 10,
  },
  margin: {
    marginRight: 10,
  },
});

export default HomeScreen;
