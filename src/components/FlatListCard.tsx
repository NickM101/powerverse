import React from 'react';
import {View} from 'react-native';
import FastImage from 'react-native-fast-image';

const FlatListCard = () => {
  return (
    <View>
      <FastImage
        source={{
          uri: 'https://unsplash.it/400/400?image=1',
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
    </View>
  );
};

export default FlatListCard;
