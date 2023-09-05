import {borderRadii, spacing} from '@theme/designSystem';
import {typographyStyles} from '@theme/designTypography';
import {
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
} from '@theme/normalize';
import {CustomImageStyle} from '../../types/declerative';
import React, {useCallback, useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {ComicPublishers, publishers} from '@lib/constants';

interface ModalSelectorProps {
  onShow: boolean;
  toggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalSelector: React.FC<ModalSelectorProps> = ({onShow, toggle}) => {
  const renderItem = useCallback(
    (item: ComicPublishers) => (
      <Pressable
        onPress={() => toggle(!onShow)}
        key={item.id}
        style={styles.itemContainer}>
        <View style={styles.imageContainer}>
          <Image source={item.image} style={[styles.image, imageStyle]} />
          <View>
            <Text style={typographyStyles.title}>{item.name}</Text>
            <Text style={typographyStyles.subtext}>
              Characters available: 500
            </Text>
          </View>
        </View>
        <Icon name={'checkmark-done'} color={'white'} size={32} />
      </Pressable>
    ),
    [],
  );

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={onShow}
      onRequestClose={() => {
        toggle(!onShow);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.container}>
          <Text style={[typographyStyles.headline, styles.text]}>
            Popular Comic Publishers
          </Text>
          {publishers.map(renderItem)}
        </View>
      </View>
    </Modal>
  );
};

const imageStyle: CustomImageStyle = {
  height: heightPixel(50),
  width: widthPixel(100),
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: pixelSizeVertical(22),
  },
  container: {
    margin: pixelSizeVertical(10),
    height: heightPixel(450),
    backgroundColor: 'black',
    borderRadius: borderRadii.medium,
    padding: pixelSizeVertical(5),
    alignItems: 'center',
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  background: {
    backgroundColor: 'black',
  },
  indicator: {
    backgroundColor: 'grey',
    borderColor: 'white',
  },
  text: {
    marginLeft: pixelSizeHorizontal(spacing.sm),
  },
  image: {
    resizeMode: 'contain',
    marginRight: pixelSizeHorizontal(spacing.xs),
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: pixelSizeHorizontal(spacing.xs),
    paddingVertical: pixelSizeVertical(spacing.xs),
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ModalSelector;
