import React, {useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '@screens/HomeScreen';
import DetailScreen from '@features/detail/DetailScreen';
import {darkModeColors, lightModeColors} from '@theme/designColors';
import {useAppSelector, useAppDispatch} from '@hooks/reduxHooks';
import ProfilePage from '@features/profile/ProfilePage';
import {useColorScheme} from 'react-native';
import {setThemeMode} from '@redux/slice/themeSlice';
import SearchPage from '@features/search/SearchPage';
import {RootStackParamList} from '../types/navigationTypes';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const theme = useAppSelector(state => state.theme.mode);
  const mode = theme === 'dark' ? darkModeColors : lightModeColors;
  const dispatch = useAppDispatch();
  const colorScheme = useColorScheme();
  useEffect(() => {
    dispatch(setThemeMode(colorScheme));
  }, [colorScheme, dispatch]);

  return (
    <NavigationContainer theme={mode}>
      <RootStack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Home">
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="Detail" component={DetailScreen} />
        <RootStack.Screen name="Search" component={SearchPage} />
        <RootStack.Screen name="Profile" component={ProfilePage} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
