import {Window_Width} from '@lib/constants';
import {
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
} from '@theme/normalize';
import {CustomImageStyle} from '../../types/declerative';
import React from 'react';
import {Pressable, StyleSheet, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/Ionicons';

interface PublishersHeaderProps {
  onShow: boolean;
  toggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const PublishersHeader: React.FC<PublishersHeaderProps> = ({
  onShow,
  toggle,
}) => {
  return (
    <View style={styles.headerContainer}>
      <Pressable style={styles.headerLeft} onPress={() => toggle(!onShow)}>
        <FastImage
          style={imageStyle}
          source={require('../../../assets/images/marvel.png')}
          resizeMode={FastImage.resizeMode.cover}
        />
        <Icon
          name={'chevron-down-circle-outline'}
          color={'white'}
          size={24}
          style={styles.iconContainer}
        />
      </Pressable>
      <View />
      <TouchableOpacity style={styles.headerRight} onPress={() => {}}>
        <Icon name={'notifications-outline'} color={'white'} size={28} />
      </TouchableOpacity>
    </View>
  );
};

export default PublishersHeader;

const imageStyle: CustomImageStyle = {
  height: heightPixel(50),
  width: widthPixel(95),
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    paddingVertical: pixelSizeVertical(10),
    paddingHorizontal: pixelSizeHorizontal(16),
    height: heightPixel(70),
    width: Window_Width,
  },
  iconContainer: {
    paddingHorizontal: pixelSizeHorizontal(5),
  },
  headerLeft: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerRight: {
    justifyContent: 'center',
    paddingLeft: pixelSizeHorizontal(16),
  },
});
