import React, {useCallback} from 'react';
import {
  FlatList,
  ListRenderItem,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useAppDispatch} from '../../hooks/reduxHooks';
import {
  Character,
  selectSearchCharacter,
  selectSuggestions,
  setSearchCharacter,
} from './searchSlice';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {Nav} from '../../types/navigationTypes';

// import Autocomplete from 'react-native-autocomplete-input';

const SearchInput = () => {
  const navigation = useNavigation<Nav>();

  const dispatch = useAppDispatch();
  const searchCharacter = useSelector(selectSearchCharacter);
  const suggestions = useSelector(selectSuggestions);

  const renderItem: ListRenderItem<Character> = useCallback(
    ({item}) => (
      <Pressable
        onPress={() =>
          navigation.navigate('Detail', {
            character_id: item.id,
          })
        }>
        <Text>{item.name}</Text>
      </Pressable>
    ),
    [navigation],
  );

  return (
    <View>
      <TextInput
        placeholder="Search for characters"
        value={searchCharacter}
        onChangeText={text => dispatch(setSearchCharacter(text))}
      />
      <FlatList data={suggestions} renderItem={renderItem} />
    </View>
  );
};

export default SearchInput;

// const styles = StyleSheet.create({
//   autocompleteContainer: {
//     flex: 1,
//     left: 0,
//     position: 'absolute',
//     right: 0,
//     top: 0,
//     zIndex: 1,
//   },
// });
