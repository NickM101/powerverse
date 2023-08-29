import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {spacing} from '@theme/designSystem';
import {pixelSizeHorizontal, pixelSizeVertical} from '@theme/normalize';
import {typographyStyles} from '@theme/designTypography';

const CharacterWork = () => {
  const locations =
    'Batcave, Stately Wayne Manor, Gotham City; Hall of Justice, Justice League Watchtower';
  const locationArray = locations.split(';').map(location => location.trim());
  const groups =
    'Batman Family, Batman Incorporated, Justice League, Outsiders, Wayne Enterprises, Club of Heroes, formerly White Lantern Corps, Sinestro Corps';
  const groupsArray = groups.split(',').map(location => location.trim());
  return (
    <View style={styles.container}>
      <Text style={typographyStyles.title}>Occupation</Text>
      <Text style={[typographyStyles.label, styles.subtext]}>Businessman</Text>
      <Text style={typographyStyles.title}>Base</Text>
      {locationArray.map((location, index) => (
        <Text style={[typographyStyles.label, styles.subtext]} key={index}>
          • {location}
        </Text>
      ))}
      {groupsArray.map((location, index) => (
        <Text style={[typographyStyles.label, styles.subtext]} key={index}>
          • {location}
        </Text>
      ))}
    </View>
  );
};

export default CharacterWork;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    paddingHorizontal: pixelSizeHorizontal(spacing.sm),
    paddingVertical: pixelSizeVertical(spacing.xs),
  },
  subtext: {
    paddingLeft: pixelSizeHorizontal(spacing.lg),
  },
});
