import React from 'react';
import {SafeAreaView} from 'react-native';

import {ThemeManager} from './src/components/ThemeManager';
import SearchPage from './src/features/search/SearchPage';
// import {ApiProvider} from '@reduxjs/toolkit/dist/query/react';
import {store} from './src/core/store';
import {Provider} from 'react-redux';
import HomeScreen from './src/features/home/HomeScreen';

const App = () => {
  return (
    <Provider store={store}>
          <HomeScreen />
    </Provider>
  );
};

export default App;
