import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import CharacterBio from '@features/detail/CharacterBio';
import CharacterWork from '@features/detail/CharacterWork';
import CharacterConnections from '@features/detail/CharacterConnections';
import CharacterPowerStats from '@features/detail/CharacterPowerStats';
import {normalize} from '@theme/normalize';

const Tab = createMaterialTopTabNavigator();

const CharacterTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: normalize(12),
          fontFamily: 'Rubik-Medium',
          letterSpacing: 1,
        },
        tabBarStyle: {
          backgroundColor: 'black',
        },
      }}>
      <Tab.Screen name="Bio" component={CharacterBio} />
      <Tab.Screen name="Powers" component={CharacterPowerStats} />
      <Tab.Screen name="Work" component={CharacterWork} />
      <Tab.Screen name="Relative" component={CharacterConnections} />
    </Tab.Navigator>
  );
};

export default CharacterTabs;
