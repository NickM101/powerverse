import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import {BlurView} from '@react-native-community/blur';

interface FlatListCardProps {
  imageSource: string;
  text: string;
}

const FlatListCard: React.FC<FlatListCardProps> = ({imageSource, text}) => {
  return (
    <View style={styles.container}>
      <FastImage
        source={{uri: imageSource}}
        style={styles.image}
        resizeMode={FastImage.resizeMode.cover}
      />
      <BlurView
        style={styles.blur}
        blurType="dark"
        blurAmount={15}
        overlayColor="rgba(252, 252, 252, 0.0)"
      />
      <Text style={styles.overlayText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '60%',
    height: '70%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  blur: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '20%',
  },
  overlayText: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FlatListCard;
