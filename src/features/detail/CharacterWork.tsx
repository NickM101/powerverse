import React from 'react';
import {
  FlatList,
  ListRenderItem,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {spacing} from '@theme/designSystem';
import {
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
} from '@theme/normalize';
import {typographyStyles} from '@theme/designTypography';

const CharacterWork = () => {
  const locations =
    'Batcave, Stately Wayne Manor, Gotham City; Hall of Justice, Justice League Watchtower';
  const locationArray = locations.split(';').map(location => location.trim());
  const groups =
    'Batman Family, Batman Incorporated, Justice League, Outsiders, Wayne Enterprises, Club of Heroes, formerly White Lantern Corps, Sinestro Corps';
  const groupsArray = groups.split(',').map(location => location.trim());

  const renderItem: ListRenderItem<string> = ({item}) => {
    return (
      <Text style={[typographyStyles.label, styles.work]} key={item}>
        • {item}
      </Text>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={groupsArray}
        renderItem={renderItem}
        keyExtractor={item => item}
        numColumns={2}
        ListHeaderComponent={() => (
          <>
            <View style={{paddingBottom: pixelSizeVertical(spacing.sm)}}>
              <Text style={[typographyStyles.title, {fontWeight: 'bold'}]}>
                Occupation
              </Text>
              <Text style={[typographyStyles.label, styles.base]}>
                Businessman
              </Text>
            </View>
            <View style={styles.spacer}>
              <Text style={[typographyStyles.title, {fontWeight: 'bold'}]}>
                Base
              </Text>
              {locationArray.map((location, index) => (
                <Text style={[typographyStyles.label, styles.base]} key={index}>
                  • {location}
                </Text>
              ))}
            </View>
            <Text style={[typographyStyles.title, {fontWeight: 'bold'}]}>
              Work
            </Text>
          </>
        )}
      />
    </View>
  );
};

export default CharacterWork;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: pixelSizeHorizontal(spacing.xxs),
    paddingVertical: pixelSizeVertical(spacing.xs),
  },
  base: {
    margin: 2,
    paddingLeft: pixelSizeHorizontal(spacing.xxs),
  },
  work: {
    margin: 5,
    width: widthPixel(200),
    paddingLeft: pixelSizeHorizontal(spacing.xxs),
  },
  spacer: {
    paddingVertical: pixelSizeVertical(spacing.sm),
  },
});
