import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {BlurView} from '@react-native-community/blur';

interface FlatListCardProps {
  imageSource: string;
  text: string;
  item: number;
}

const FlatListCard: React.FC<FlatListCardProps> = ({
  imageSource,
  text,
  item,
}) => {
  return (
    <View style={styles.container}>
      <Image key={item} source={{uri: imageSource}} style={styles.image} />
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
    height: 300,
    width: 300,
    marginRight: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 15,
    resizeMode: 'cover',
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
