import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ProgressBar} from '@react-native-community/progress-bar-android';

import {spacing} from '@theme/designSystem';
import {pixelSizeHorizontal, pixelSizeVertical} from '@theme/normalize';
import {typographyStyles} from '@theme/designTypography';

const CharacterPowerStats = () => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.titleSection}>
          <Text style={typographyStyles.title}>Intelligence</Text>
          <Text style={typographyStyles.title}>70</Text>
        </View>
        <ProgressBar
          styleAttr="Horizontal"
          indeterminate={false}
          progress={0.7}
        />
      </View>
      <View>
        <View style={styles.titleSection}>
          <Text style={typographyStyles.title}>Strength</Text>
          <Text style={typographyStyles.title}>70</Text>
        </View>
        <ProgressBar
          styleAttr="Horizontal"
          indeterminate={false}
          progress={0.7}
        />
      </View>
      <View>
        <View style={styles.titleSection}>
          <Text style={typographyStyles.title}>Speed</Text>
          <Text style={typographyStyles.title}>70</Text>
        </View>
        <ProgressBar
          styleAttr="Horizontal"
          indeterminate={false}
          progress={0.7}
        />
      </View>
      <View>
        <View style={styles.titleSection}>
          <Text style={typographyStyles.title}>Durability</Text>
          <Text style={typographyStyles.title}>70</Text>
        </View>
        <ProgressBar
          styleAttr="Horizontal"
          indeterminate={false}
          progress={0.7}
        />
      </View>
      <View>
        <View style={styles.titleSection}>
          <Text style={typographyStyles.title}>Power</Text>
          <Text style={typographyStyles.title}>70</Text>
        </View>
        <ProgressBar
          styleAttr="Horizontal"
          indeterminate={false}
          progress={0.7}
        />
      </View>
      <View>
        <View style={styles.titleSection}>
          <Text style={typographyStyles.title}>Combat</Text>
          <Text style={typographyStyles.title}>70</Text>
        </View>
        <ProgressBar
          styleAttr="Horizontal"
          indeterminate={false}
          progress={0.7}
        />
      </View>
    </View>
  );
};

export default CharacterPowerStats;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    paddingVertical: pixelSizeVertical(spacing.sm),
    paddingHorizontal: pixelSizeHorizontal(spacing.sm),
  },
  titleSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
