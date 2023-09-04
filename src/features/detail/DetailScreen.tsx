import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BlurView} from '@react-native-community/blur';

import {heightPixel, normalize, pixelSizeHorizontal} from '@theme/normalize';
import {typographyStyles} from '@theme/designTypography';
import {spacing} from '@theme/designSystem';
import CharacterAppearance from '@features/detail/CharacterAppearance';
import CharacterTabs from '@navigation/character_tabs';

const DetailScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={[typographyStyles.display, styles.topText]}>
          Wonder Woman
        </Text>
        <BlurView style={styles.blur} blurType="dark" blurAmount={5} />
        <Text style={[typographyStyles.title, styles.bottomText]}>
          Wonder woman
        </Text>
      </View>
      <CharacterAppearance />
      <CharacterTabs />
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.xs,
  },
  textContainer: {
    position: 'relative',
    paddingTop: pixelSizeHorizontal(50),
    height: heightPixel(100),
  },
  topText: {
    position: 'absolute',
    bottom: -12,
    fontSize: normalize(52),
  },
  blur: {
    position: 'absolute',
    bottom: -25,
    left: 0,
    right: 0,
    height: heightPixel(200),
  },
  bottomText: {
    position: 'absolute',
    bottom: 0,
    paddingLeft: pixelSizeHorizontal(spacing.lg),
  },
  imageContent: {
    flex: 1,
    flexDirection: 'row',
    maxHeight: heightPixel(250),
    paddingHorizontal: pixelSizeHorizontal(spacing.lg),
  },
  appearance: {
    flexDirection: 'column',
  },
});
