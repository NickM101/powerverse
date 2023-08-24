import React from 'react';
import {View} from 'react-native';
import {GlobalStyles} from '../theme';
import HomeCarousel from '../components/HomeCarousel';

const HomeScreen = () => {
  return (
    <View style={GlobalStyles.container}>
      <HomeCarousel />
    </View>
  );
};

export default HomeScreen;
