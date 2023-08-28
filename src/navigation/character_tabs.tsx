import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import CharacterAppearance from '@features/detail/CharacterAppearance';
import CharacterBio from '@features/detail/CharacterBio';

const Tab = createMaterialTopTabNavigator();

const CharacterTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Biography" component={CharacterBio} />
      <Tab.Screen name="Powerstats" component={CharacterAppearance} />
      <Tab.Screen name="Work" component={CharacterAppearance} />
      <Tab.Screen name="Connections" component={CharacterAppearance} />
    </Tab.Navigator>
  );
};

export default CharacterTabs;
