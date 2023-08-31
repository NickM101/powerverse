import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ProgressBar} from '@react-native-community/progress-bar-android';

import {spacing} from '@theme/designSystem';
import {pixelSizeHorizontal, pixelSizeVertical} from '@theme/normalize';
import {typographyStyles} from '@theme/designTypography';

const CharacterPowerStats = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleSection}>
        <Text style={typographyStyles.label}>Intelligence</Text>
        <Text style={typographyStyles.label}>70</Text>
      </View>
      <ProgressBar
        styleAttr="Horizontal"
        indeterminate={false}
        progress={0.7}
      />
      <View style={styles.titleSection}>
        <Text style={typographyStyles.label}>Strength</Text>
        <Text style={typographyStyles.label}>70</Text>
      </View>
      <ProgressBar
        styleAttr="Horizontal"
        indeterminate={false}
        progress={0.7}
      />
      <View style={styles.titleSection}>
        <Text style={typographyStyles.label}>Speed</Text>
        <Text style={typographyStyles.label}>70</Text>
      </View>
      <ProgressBar
        styleAttr="Horizontal"
        indeterminate={false}
        progress={0.7}
      />
      <View style={styles.titleSection}>
        <Text style={typographyStyles.label}>Durability</Text>
        <Text style={typographyStyles.label}>70</Text>
      </View>
      <ProgressBar
        styleAttr="Horizontal"
        indeterminate={false}
        progress={0.7}
      />
      <View style={styles.titleSection}>
        <Text style={typographyStyles.label}>Power</Text>
        <Text style={typographyStyles.label}>70</Text>
      </View>
      <ProgressBar
        styleAttr="Horizontal"
        indeterminate={false}
        progress={0.7}
      />
      <View style={styles.titleSection}>
        <Text style={typographyStyles.label}>Combat</Text>
        <Text style={typographyStyles.label}>70</Text>
      </View>
      <ProgressBar
        styleAttr="Horizontal"
        indeterminate={false}
        progress={0.7}
      />
    </View>
  );
};

export default CharacterPowerStats;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: pixelSizeVertical(spacing.sm),
    paddingHorizontal: pixelSizeHorizontal(spacing.sm),
  },
  titleSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
