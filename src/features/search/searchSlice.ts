import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import charactersData from '../../lib/data.json';

export interface Character {
  id: number;
  name: string;
}
export interface SearchState {
  searchCharacter: string;
  suggestions: Character[];
  characters: Character[];
}

const characters: Character[] = charactersData.map((item: any) => ({
  id: item[0], // Assuming the first element is the ID
  name: item[1], // Assuming the second element is the name
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
      searchSlice.caseReducers.setSuggestions(state);
    },
    setSuggestions: state => {
      const filteredSuggestions = state.characters.filter(item =>
        item.name.toLowerCase().includes(state.searchCharacter.toLowerCase()),
      );

      console.log(filteredSuggestions);

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
