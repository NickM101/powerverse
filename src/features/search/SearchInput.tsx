import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {useAppDispatch} from '../../hooks/reduxHooks';
import {
  selectSearchCharacter,
  selectSuggestions,
  setSearchCharacter,
} from './searchSlice';
import {useSelector} from 'react-redux';
import {typographyStyles} from '../../theme/designTypography';
import {useTheme} from '@react-navigation/native';
import {ModeColors} from '../../theme/designColors';
// import Autocomplete from 'react-native-autocomplete-input';

const SearchInput = () => {
  const dispatch = useAppDispatch();
  const {colors} = useTheme() as ModeColors;
  const searchCharacter = useSelector(selectSearchCharacter);
  const suggestions = useSelector(selectSuggestions);

  return (
    <View>
      <TextInput
        placeholder="Search for characters"
        value={searchCharacter}
        onChangeText={text => dispatch(setSearchCharacter(text))}
      />
      <Text style={[typographyStyles.regular, {color: colors.text}]}>
        {searchCharacter}
      </Text>
      <Text style={[typographyStyles.regular, {color: colors.text}]}>
        {suggestions.length}
      </Text>
      {suggestions.map(item => (
        <Text style={[typographyStyles.regular, {color: colors.text}]}>
          {item.name}
        </Text>
      ))}
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
