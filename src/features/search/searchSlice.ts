import {createSlice} from '@reduxjs/toolkit';

export interface SearchState {
  character: string;
}

const initialState: SearchState = {
  character: 'Nick',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    search: state => {
      state.character = 'Batman';
    },
  },
});

export const {search} = searchSlice.actions;

export default searchSlice.reducer;
