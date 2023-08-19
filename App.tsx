import {GestureHandlerRootView} from 'react-native-gesture-handler';
import React from 'react';
import {store} from './src/core/store';
import {Provider} from 'react-redux';
import RootNavigator from './src/navigation/root-navigator';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
