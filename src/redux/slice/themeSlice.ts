import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {ColorSchemeName} from 'react-native';

interface ThemeState {
  mode: ColorSchemeName;
}

const initialState: ThemeState = {
  mode: 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setThemeMode: (state, action: PayloadAction<ColorSchemeName>) => {
      state.mode = action.payload;
    },
  },
});

export const {setThemeMode} = themeSlice.actions;

export default themeSlice.reducer;
