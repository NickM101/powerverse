import {GestureHandlerRootView} from 'react-native-gesture-handler';
import React from 'react';
import {store} from './src/core/store';
import {Provider} from 'react-redux';
import DetailScreen from './src/features/detail/DetailScreen';
import HomeScreen from './src/features/home/HomeScreen';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <DetailScreen />
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
