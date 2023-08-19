import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import FastImage from 'react-native-fast-image';
import {BlurView} from '@react-native-community/blur';
import {useNavigation} from '@react-navigation/native';

interface FlatListCardProps {
  imageSource: string;
  text: string;
  item: any;
  type?: number;
  height?: number;
  width?: number;
}

const FlatListCard: React.FC<FlatListCardProps> = ({
  imageSource,
  text,
  item,
  type = 1,
  height = 300,
  width = 300,
}) => {
  const navigation = useNavigation();

  const onHandlePressed = () => {
    return navigation.navigate('Detail', {image: imageSource, name: text});
  };
  return (
    <Pressable
      style={[styles.container, {height, width}]}
      onPress={onHandlePressed}>
      <FastImage
        key={item}
        source={{uri: imageSource}}
        style={[type === 1 ? styles.image : styles.image2, {height, width}]}
        resizeMode={FastImage.resizeMode.cover}
      />
      <BlurView
        style={styles.blur}
        blurType="dark"
        blurAmount={15}
        overlayColor="rgba(252, 252, 252, 0.0)"
      />
      <Text style={styles.overlayText}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    borderRadius: 15,
  },
  image2: {
    height: '100%',
    width: '100%',
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
    bottom: 25,
    left: 20,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FlatListCard;