import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {spacing} from '@theme/designSystem';
import {pixelSizeVertical} from '@theme/normalize';
import {typographyStyles} from '@theme/designTypography';

const CharacterConnections = () => {
  const relatives =
    'Damian Wayne (son), Dick Grayson (adopted son), Tim Drake (adopted son), Jason Todd (adopted son), Cassandra Cain (adopted ward)\nMartha Wayne (mother, deceased), Thomas Wayne (father, deceased), Alfred Pennyworth (former guardian), Roderick Kane (grandfather, deceased), Elizabeth Kane (grandmother, deceased), Nathan Kane (uncle, deceased), Simon Hurt (ancestor), Wayne Family';

  // Split the input on semicolons to get individual entries
  const items = relatives.split('),');

  // Divide the items into two separate columns
  const middleIndex = Math.ceil(items.length / 2);
  const firstColumn = items.slice(0, middleIndex);
  const secondColumn = items.slice(middleIndex);

  return (
    <View style={styles.container}>
      <View style={styles.column}>
        {firstColumn.map((location, index) => (
          <Text style={typographyStyles.label} key={index}>
            • {location}
          </Text>
        ))}
      </View>
      <View style={styles.column}>
        {secondColumn.map((location, index) => (
          <Text style={typographyStyles.label} key={index + middleIndex}>
            • {location}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default CharacterConnections;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: pixelSizeVertical(spacing.sm),
  },
  column: {
    flex: 1,
    justifyContent: 'space-around',
  },
});
