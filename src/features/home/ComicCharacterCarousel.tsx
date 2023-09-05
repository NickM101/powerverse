import React, {useCallback, useState} from 'react';
import {
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import VisualInfoCard from '@components/VisualInfoCard';
import {Window_Width} from '@lib/constants';
import {borderRadii} from '@theme/designSystem';
import {typographyStyles} from '@theme/designTypography';
import {heightPixel, widthPixel} from '@theme/normalize';
import {CustomImageStyle} from '../../types/declerative';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';

const ComicCharacterCarousel = () => {
  const items = [1, 2, 3, 4, 5];

  const [sliderState, setSliderState] = useState({
    item: 0,
    offset: 0,
  });

  const slideChanged = (e: {nativeEvent: {contentOffset: {x: number}}}) => {
    const item = Math.round(e.nativeEvent.contentOffset.x / Window_Width);

    setSliderState({
      item: item,
      offset: item * Window_Width,
    });
  };

  console.log('Item number', sliderState.item);

  const renderItem: ListRenderItem<number> = useCallback(
    ({item, index}) => (
      <View style={imageStyle}>
        <FastImage
          source={{
            uri: 'https://www.superherodb.com/pictures2/portraits/10/100/639.jpg',
          }}
          style={imageStyle}
          resizeMode={FastImage.resizeMode.stretch}>
          <LinearGradient
            colors={['#00000000', '#000000']}
            style={imageStyle}
          />
        </FastImage>
        <View style={styles.textContainer}>
          <Text style={typographyStyles.headline}>Superhero {item}</Text>
          <Text style={[typographyStyles.subtitle, styles.description]}>
            Description of the superhero.
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={typographyStyles.button}>Learn More</Text>
          </TouchableOpacity>
        </View>
      </View>
    ),
    [sliderState],
  );

  const keyExtractor = useCallback((items: number) => items.toString(), []);

  const getItemLayout = useCallback(
    (data: any, index: number) => ({
      length: Window_Width,
      offset: Window_Width * index,
      index,
    }),
    [],
  );

  return (
    <View>
      <FlatList
        horizontal
        data={items}
        pagingEnabled
        windowSize={2}
        removeClippedSubviews
        scrollEventThrottle={16}
        initialNumToRender={0}
        maxToRenderPerBatch={1}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        onScroll={slideChanged}
        showsHorizontalScrollIndicator={false}
        getItemLayout={getItemLayout}
      />
      <View style={styles.dotGroup}>
        {items.map((item, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              // eslint-disable-next-line react-native/no-inline-styles
              sliderState.item === index ? {backgroundColor: 'white'} : null,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default ComicCharacterCarousel;

const imageStyle: CustomImageStyle = {
  height: heightPixel(600),
  width: Window_Width,
};

const styles = StyleSheet.create({
  textContainer: {
    position: 'absolute',
    alignItems: 'center',
    width: '100%',
    height: '90%',
    top: '65%',
  },
  description: {
    color: 'white',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#BF0812',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: widthPixel(220),
  },
  dotGroup: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 30,
  },
  dot: {
    width: widthPixel(35),
    height: heightPixel(borderRadii.medium),
    borderRadius: borderRadii.small,
    marginHorizontal: 5,
    backgroundColor: 'grey',
  },
});
