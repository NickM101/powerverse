import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import CharacterAppearance from '@features/detail/CharacterAppearance';
import CharacterBio from '@features/detail/CharacterBio';
import CharacterWork from '@features/detail/CharacterWork';
import CharacterConnections from '@features/detail/CharacterConnections';
import {heightPixel} from '@theme/normalize';

const Tab = createMaterialTopTabNavigator();

const CharacterTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontSize: 11},
        tabBarStyle: {
          backgroundColor: 'black',
        },
      }}>
      <Tab.Screen name="Biography" component={CharacterBio} />
      <Tab.Screen name="Powerstats" component={CharacterAppearance} />
      <Tab.Screen name="Work" component={CharacterWork} />
      <Tab.Screen name="Connections" component={CharacterConnections} />
    </Tab.Navigator>
  );
};

export default CharacterTabs;
