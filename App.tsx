import React from 'react';
import {SafeAreaView, Text} from 'react-native';

import {ThemeManager} from './src/components/ThemeManager';

const App = () => {
  return (
    <ThemeManager>
      <SafeAreaView>
        <Text>Hello world</Text>
      </SafeAreaView>
    </ThemeManager>
  );
};
export default App;
