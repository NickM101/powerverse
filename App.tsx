import React from 'react';
import {SafeAreaView} from 'react-native';

import {ThemeManager} from './src/components/ThemeManager';
import SearchPage from './src/features/search/SearchPage';
import {Provider} from 'react-redux';
import {store} from './src/core/store';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeManager>
        <SafeAreaView>
          <SearchPage />
        </SafeAreaView>
      </ThemeManager>
    </Provider>
  );
};
export default App;
