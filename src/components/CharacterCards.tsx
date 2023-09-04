import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {heightPixel, pixelSizeHorizontal, widthPixel} from '@theme/normalize';
import {borderRadii, spacing} from '@theme/designSystem';
import FastImage from 'react-native-fast-image';
import {CustomImageStyle} from '../types/declerative';
import {typographyStyles} from '@theme/designTypography';

const CharacterCards = () => {
  return (
    <View style={styles.container}>
      <FastImage
        source={{
          uri: 'https://www.superherodb.com/pictures2/portraits/10/100/639.jpg',
        }}
        style={imageStyle}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.textContainer}>
        <Text style={typographyStyles.label}>Buffy the Vampire Slayer</Text>
      </View>
    </View>
  );
};

export default CharacterCards;

const imageStyle: CustomImageStyle = {
  height: heightPixel(250),
  width: widthPixel(178),
  borderRadius: borderRadii.medium,
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    height: heightPixel(330),
    width: widthPixel(180),
    marginHorizontal: pixelSizeHorizontal(spacing.xs),
    borderWidth: 1,
    borderRadius: borderRadii.medium,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.xs,
  },
  text: {
    textAlign: 'center',
  },
});
