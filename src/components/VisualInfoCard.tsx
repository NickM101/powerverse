import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FastImage, {FastImageProps} from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import {heightPixel, widthPixel} from '@theme/normalize';
import {typographyStyles} from '@theme/designTypography';
import {Window_Width} from '@lib/constants';
import {borderRadii} from '@theme/designSystem';

const VisualInfoCard = () => {
  const items = [1, 2, 3, 4, 5];

  return (
    <View style={imageStyle}>
      <FastImage
        source={{
          uri: 'https://www.superherodb.com/pictures2/portraits/10/100/639.jpg',
        }}
        style={imageStyle}
        resizeMode={FastImage.resizeMode.stretch}>
        <LinearGradient colors={['#00000000', '#000000']} style={imageStyle} />
      </FastImage>
      <View style={styles.textContainer}>
        <Text style={typographyStyles.headline}>Superhero Name</Text>
        <Text style={[typographyStyles.subtitle, styles.description]}>
          Description of the superhero.
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={typographyStyles.button}>Learn More</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.dotGroup}>
        {items.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              // eslint-disable-next-line react-native/no-inline-styles
              index === 0 ? {backgroundColor: 'white'} : null,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default VisualInfoCard;

type CustomImageStyle = FastImageProps & {
  height: number;
  width: number;
};
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
    top: '70%',
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
    bottom: 35,
  },
  dot: {
    width: widthPixel(35),
    height: heightPixel(borderRadii.medium),
    borderRadius: borderRadii.small,
    marginHorizontal: 5,
    backgroundColor: 'grey',
  },
});
