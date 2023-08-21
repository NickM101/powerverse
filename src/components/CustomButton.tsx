import React from 'react';
import {Text, Pressable} from 'react-native';
import {useTheme} from '@react-navigation/native';

import {GlobalStyles} from '../theme';
import {ModeColors} from '../theme/designColors';

const CustomButton = () => {
  const {colors} = useTheme() as ModeColors;

  return (
    <Pressable
      style={[GlobalStyles.button, {backgroundColor: colors.button}]}
      onPress={() => {}}>
      <Text style={{color: colors.background}}>Get Started</Text>
    </Pressable>
  );
};

export default CustomButton;
