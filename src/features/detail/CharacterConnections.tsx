import React from 'react';
import {FlatList, ListRenderItem, StyleSheet, Text, View} from 'react-native';

import {spacing} from '@theme/designSystem';
import {
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '@theme/normalize';
import {typographyStyles} from '@theme/designTypography';

const CharacterConnections = () => {
  const relatives =
    'Damian Wayne (son), Dick Grayson (adopted son), Tim Drake (adopted son), Jason Todd (adopted son), Cassandra Cain (adopted ward)\nMartha Wayne (mother, deceased), Thomas Wayne (father, deceased), Alfred Pennyworth (former guardian), Roderick Kane (grandfather, deceased), Elizabeth Kane (grandmother, deceased), Nathan Kane (uncle, deceased), Simon Hurt (ancestor), Wayne Family';
  const modifiedData = relatives.replace(/\n/g, ', ');
  const items = modifiedData.split('),');

  const renderItem: ListRenderItem<string> = ({item}) => {
    const parts = item.split('(');

    return (
      <View style={styles.item}>
        <Text style={[typographyStyles.title, {fontWeight: 'bold'}]}>
          • {parts[0]}
        </Text>
        <Text style={[typographyStyles.subtext, styles.subtitle]}>
          {parts.slice(1).join(' ')}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.contentContainer}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item}
        numColumns={2}
      />
    </View>
  );
};

export default CharacterConnections;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: pixelSizeVertical(spacing.sm),
  },
  item: {
    flex: 1,
    margin: 5,
    height: heightPixel(40),
  },
  subtitle: {
    paddingLeft: pixelSizeHorizontal(spacing.sm),
  },
});
