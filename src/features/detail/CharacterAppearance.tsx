import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';

import {
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
} from '@theme/normalize';
import {typographyStyles} from '@theme/designTypography';
import {borderRadii, spacing} from '@theme/designSystem';
import {CustomImageStyle} from '../../types/declerative';

const CharacterAppearance = () => {
  return (
    <View style={styles.imageContent}>
      <FastImage
        source={{
          uri: 'https://www.superherodb.com/pictures2/portraits/10/100/639.jpg',
        }}
        style={imageStyle}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.contentContainer}>
        <Text style={typographyStyles.label}>Batman</Text>
        <Text style={typographyStyles.label}>Bruce Wayne</Text>
        <Text style={typographyStyles.label}>Human • Male</Text>
        <Text style={typographyStyles.label}>Eye Color • Blue</Text>
        <Text style={typographyStyles.label}>Hair Color • Black</Text>
        <Text style={typographyStyles.label}>Height • 6'2, 188 cm</Text>
        <Text style={typographyStyles.label}>Weight • 210 lb, 95 kg</Text>
      </View>
    </View>
  );
};

export default CharacterAppearance;

const imageStyle: CustomImageStyle = {
  height: heightPixel(250),
  width: widthPixel(178),
  borderRadius: borderRadii.medium,
};

const styles = StyleSheet.create({
  imageContent: {
    flex: 1,
    flexDirection: 'row',
    maxHeight: heightPixel(250),
    paddingHorizontal: pixelSizeHorizontal(spacing.lg),
    marginVertical: pixelSizeVertical(spacing.sm),
  },
  contentContainer: {
    justifyContent: 'space-evenly',
    paddingHorizontal: pixelSizeHorizontal(spacing.sm),
  },
});
