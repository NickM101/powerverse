import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import CharacterBio from '@features/detail/CharacterBio';
import CharacterWork from '@features/detail/CharacterWork';
import CharacterConnections from '@features/detail/CharacterConnections';
import CharacterPowerStats from '@features/detail/CharacterPowerStats';

const Tab = createMaterialTopTabNavigator();

const CharacterTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 11,
          fontFamily: 'Rubik-Medium',
          letterSpacing: 1,
        },
        tabBarStyle: {
          backgroundColor: 'black',
        },
      }}>
      <Tab.Screen name="Biography" component={CharacterBio} />
      <Tab.Screen name="Powerstats" component={CharacterPowerStats} />
      <Tab.Screen name="Work" component={CharacterWork} />
      <Tab.Screen name="Connection" component={CharacterConnections} />
    </Tab.Navigator>
  );
};

export default CharacterTabs;
