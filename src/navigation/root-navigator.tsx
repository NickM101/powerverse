import React from 'react';
import {useColorScheme} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../features/home/HomeScreen';
import DetailScreen from '../features/detail/DetailScreen';
import RootStackParamList from '../types/navigationTypes';
import {darkModeColors, lightModeColors} from '../theme/Colors';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const scheme = useColorScheme();
  console.log('scheme', scheme);
  return (
    <NavigationContainer
      theme={scheme === 'light' ? darkModeColors : lightModeColors}>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="Detail" component={DetailScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
