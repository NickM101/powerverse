import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
} from '@theme/normalize';
import {borderRadii, spacing} from '@theme/designSystem';

const CharacterCards = () => {
  return (
    <View style={styles.container}>
      <Text>CharacterCards</Text>
    </View>
  );
};

export default CharacterCards;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignContent: 'center',
    height: heightPixel(200),
    width: widthPixel(200),
    marginVertical: pixelSizeVertical(spacing.sm),
    marginHorizontal: pixelSizeHorizontal(spacing.sm),
    paddingHorizontal: pixelSizeHorizontal(spacing.xl),
    paddingVertical: pixelSizeVertical(spacing.xl),
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: borderRadii.medium,
    backgroundColor: 'red',
  },
});
