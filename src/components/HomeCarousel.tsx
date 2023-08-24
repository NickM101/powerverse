import {
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  useColorScheme,
} from 'react-native';
import React, {useState} from 'react';
import {heightPixel, widthPixel} from '../theme/normalize';
import FastImage from 'react-native-fast-image';
import {useTheme} from '@react-navigation/native';

const data = [
  {
    color: '#44b5a1',
    image: 'https://opendoodles.s3-us-west-1.amazonaws.com/roller-skating.png',
  },
  {
    color: '#fa458c',
    image: 'https://opendoodles.s3-us-west-1.amazonaws.com/zombieing.png',
  },
  {
    color: '#2ecc71',
    image: 'https://opendoodles.s3-us-west-1.amazonaws.com/ice-cream.png',
  },
];

const windowWidth = Dimensions.get('window').width;

const Dots = () => {
  const {colors} = useTheme();
  return (
    <View style={styles.dotGroup}>
      {data.map((_, index) => (
        <View
          key={index}
          style={[styles.dot, 1 ? colors.notification : null]}
        />
      ))}
    </View>
  );
};

const HomeCarousel = () => {
  const {colors} = useTheme();
  const [sliderState, setSliderState] = useState({
    item: 0,
    offset: 0,
  });

  const slideChanged = (e: {nativeEvent: {contentOffset: {x: number}}}) => {
    const item = Math.round(e.nativeEvent.contentOffset.x / windowWidth);

    setSliderState({
      item: item,
      offset: item * windowWidth,
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        horizontal={true}
        pagingEnabled={true} // Enables snapping
        renderItem={({item}) => (
          <FastImage
            resizeMode={FastImage.resizeMode.cover}
            style={styles.image}
            source={{uri: item.image}}
          />
        )}
        keyExtractor={(_, index) => index.toString()}
        onScroll={slideChanged} // Fire slideChanged on scroll event
        showsHorizontalScrollIndicator={false}
        getItemLayout={(_, index) => ({
          length: windowWidth,
          offset: windowWidth * index,
          index,
        })}
        ListFooterComponent={<Dots />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: heightPixel(400),
    width: widthPixel(500),
    backgroundColor: 'red',
  },
  image: {
    height: heightPixel(400),
    width: widthPixel(500),
  },
  dotGroup: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 10,
    marginHorizontal: 5,
    borderWidth: 1.5,
    borderColor: '#ffffff',
  },
});

export default HomeCarousel;
