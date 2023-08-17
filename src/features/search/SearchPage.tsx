import React from 'react';
import {View, Text, Button} from 'react-native';
import {useAppSelector, useAppDispatch} from '../../hooks/reduxHooks';

import {search} from './searchSlice';

const SearchPage = () => {
  const searchedCharacter = useAppSelector(state => state.search.character);
  const dispatch = useAppDispatch();
  return (
    <View>
      <Text>{searchedCharacter}</Text>
      <Button title="Search" onPress={() => dispatch(search())} />
    </View>
  );
};

export default SearchPage;
