import React from 'react';
import {View} from 'react-native';
import {globalStyles} from '@theme/index';
import VisualInfoCard from '@components/VisualInfoCard';

const HomeScreen = () => {
  return (
    <View style={globalStyles.container}>
      <VisualInfoCard />
    </View>
  );
};

export default HomeScreen;
