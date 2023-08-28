import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {heightPixel, pixelSizeHorizontal, widthPixel} from '@theme/normalize';
import {BlurView} from '@react-native-community/blur';
import {typographyStyles} from '@theme/designTypography';
import FastImage from 'react-native-fast-image';
import {borderRadii, spacing} from '@theme/designSystem';
import {CustomImageStyle} from '@types/declerative';

const DetailScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={[typographyStyles.display, styles.topText]}>
          Wonder Woman
        </Text>
        <BlurView style={styles.blur} blurType="dark" blurAmount={5} />
        <Text style={[typographyStyles.headline, styles.bottomText]}>
          Wonder woman
        </Text>
      </View>
      <View style={styles.imageContent}>
        <FastImage
          source={{
            uri: 'https://www.superherodb.com/pictures2/portraits/10/100/639.jpg',
          }}
          style={imageStyle}
          resizeMode={FastImage.resizeMode.cover}
        />
        <View style={styles.container}>
          <Text style={typographyStyles.label}>Batman</Text>
          <Text style={typographyStyles.label}>Bruce Wayne</Text>
          <Text style={typographyStyles.label}>Human • Male</Text>
          <Text style={typographyStyles.label}>Eye Color • Blue</Text>
          <Text style={typographyStyles.label}>Hair Color • Black</Text>
          <Text style={typographyStyles.label}>Height • 6'2, 188 cm</Text>
          <Text style={typographyStyles.label}>Weight • 210 lb, 95 kg</Text>
        </View>
      </View>
    </View>
  );
};

export default DetailScreen;

const imageStyle: CustomImageStyle = {
  height: heightPixel(250),
  width: widthPixel(178),
  borderRadius: borderRadii.medium,
};

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
  },
  blur: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: heightPixel(200),
  },
  bottomText: {
    position: 'absolute',
  },
  imageContent: {
    flex: 1,
    flexDirection: 'row',
  },
  appearance: {
    flexDirection: 'column',
  },
});
