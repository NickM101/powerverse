import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import charactersData from '../../lib/comic_characters.json';

export interface Character {
  id: string;
  name: string;
  publisher: string;
}
export interface SearchState {
  searchCharacter: string;
  suggestions: Character[];
  characters: Character[];
}

const characters: Character[] = charactersData.map(({id, name, publisher}) => ({
  id,
  name,
  publisher,
}));

const initialState: SearchState = {
  searchCharacter: '',
  suggestions: [],
  characters: characters,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchCharacter: (state, action: PayloadAction<string>) => {
      state.searchCharacter = action.payload;

      if (state.searchCharacter.trim() === '') {
        state.suggestions = []; // Reset suggestions to empty array
      } else {
        searchSlice.caseReducers.setSuggestions(state);
      }
    },
    setSuggestions: state => {
      const filteredSuggestions = state.characters.filter(item =>
        item.name.toLowerCase().includes(state.searchCharacter.toLowerCase()),
      );

      state.suggestions = filteredSuggestions;
    },
  },
});

export const {setSearchCharacter, setSuggestions} = searchSlice.actions;

export const selectSearchCharacter = (state: {search: SearchState}) =>
  state.search.searchCharacter;
export const selectSuggestions = (state: {search: SearchState}) =>
  state.search.suggestions;

export default searchSlice.reducer;
