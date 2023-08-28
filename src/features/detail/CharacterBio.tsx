import {spacing} from '@theme/designSystem';
import {typographyStyles} from '@theme/designTypography';
import {pixelSizeHorizontal, pixelSizeVertical} from '@theme/normalize';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CharacterBio = () => {
  return (
    <View style={styles.container}>
      <Text style={typographyStyles.title}>Birth Place</Text>
      <Text style={[typographyStyles.label, styles.subtext]}>
        No alter egos found
      </Text>
      <Text style={typographyStyles.title}>Alter Egos</Text>
      <Text style={[typographyStyles.label, styles.subtext]}>
        No alter egos found
      </Text>
      <Text style={typographyStyles.title}>Aliases</Text>
      {['Insider', 'Matches Malone'].map(item => (
        <Text style={[typographyStyles.label, styles.subtext]} key={item}>
          • {item}
        </Text>
      ))}
      <Text style={typographyStyles.title}>First appearance</Text>
      <Text style={[typographyStyles.label, styles.subtext]}>
        Detective Comics #27
      </Text>
    </View>
  );
};

export default CharacterBio;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    paddingHorizontal: pixelSizeHorizontal(spacing.sm),
    paddingVertical: pixelSizeVertical(spacing.sm),
  },
  subtext: {
    paddingLeft: pixelSizeHorizontal(spacing.lg),
  },
});
