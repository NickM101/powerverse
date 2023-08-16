import React from 'react';
import {View, Text, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import type {RootState} from '../../core/store';
import {search} from './searchSlice';

const SearchPage = () => {
  const searchedCharacter = useSelector(
    (state: RootState) => state.search.character,
  );
  const dispatch = useDispatch();
  return (
    <View className="flex pt-3">
      <Text className="text-center">{searchedCharacter}</Text>
      <Button title="Search" onPress={() => dispatch(search())} />
    </View>
  );
};

export default SearchPage;
