import {spacing} from '@theme/designSystem';
import {typographyStyles} from '@theme/designTypography';
import {pixelSizeHorizontal, pixelSizeVertical} from '@theme/normalize';
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

const CharacterBio = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={{paddingBottom: pixelSizeVertical(spacing.sm)}}>
        <Text style={[typographyStyles.title, {fontWeight: 'bold'}]}>
          Birth Place
        </Text>
        <Text style={[typographyStyles.label, styles.subtext]}>
          No alter egos found
        </Text>
      </View>
      <View style={styles.spacer}>
        <Text style={[typographyStyles.title, {fontWeight: 'bold'}]}>
          Alter Egos
        </Text>
        <Text style={[typographyStyles.label, styles.subtext]}>
          No alter egos found
        </Text>
      </View>
      <View style={styles.spacer}>
        <Text style={[typographyStyles.title, {fontWeight: 'bold'}]}>
          Aliases
        </Text>
        {['Insider', 'Matches Malone'].map(item => (
          <Text style={[typographyStyles.label, styles.subtext]} key={item}>
            • {item}
          </Text>
        ))}
      </View>
      <Text style={[typographyStyles.title, {fontWeight: 'bold'}]}>
        First appearance
      </Text>
      <Text style={[typographyStyles.label, styles.subtext]}>
        Detective Comics #27
      </Text>
    </ScrollView>
  );
};

export default CharacterBio;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'space-evenly',
    paddingHorizontal: pixelSizeHorizontal(spacing.sm),
    paddingVertical: pixelSizeVertical(spacing.sm),
  },
  subtext: {
    paddingLeft: pixelSizeHorizontal(spacing.lg),
  },
  spacer: {
    paddingVertical: pixelSizeVertical(spacing.sm),
  },
});
