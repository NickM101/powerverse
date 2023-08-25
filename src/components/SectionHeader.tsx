import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {borderRadii, spacing} from '@theme/designSystem';
import {heightPixel, widthPixel, pixelSizeHorizontal} from '@theme/normalize';
import {typographyStyles} from '@theme/designTypography';

const SectionHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={typographyStyles.label}>SectionHeader</Text>
      <Text style={[typographyStyles.subtext, styles.link]}>See more</Text>
    </View>
  );
};

export default SectionHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: heightPixel(100),
    width: widthPixel(400),
    paddingHorizontal: pixelSizeHorizontal(spacing.xs),
    borderRadius: borderRadii.medium,
  },
  link: {
    textDecorationLine: 'underline',
  },
});
