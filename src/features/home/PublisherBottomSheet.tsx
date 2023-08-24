import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import {ComicPublishers, publishers} from '@lib/constants';
import {
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
} from '@theme/normalize';
import {CustomImageStyle} from '../../types/declerative';
import React, {forwardRef, useCallback, useMemo} from 'react';
import {Text, View, StyleSheet, Image, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {typographyStyles} from '@theme/designTypography';
import {spacing} from '@theme/designSystem';

interface PublisherBottomSheetProps {
  ref: React.Ref<BottomSheet>;
}

const PublisherBottomSheet = forwardRef(
  (_props: PublisherBottomSheetProps, ref: React.Ref<BottomSheet>) => {
    // variables
    const snapPoints = useMemo(() => ['1%', '50%'], []);

    const renderItem = useCallback(
      (item: ComicPublishers) => (
        <Pressable
          onPress={() => ref.current?.close()}
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
      [ref],
    );

    return (
      <BottomSheet
        ref={ref}
        snapPoints={snapPoints}
        index={-1}
        backgroundStyle={styles.background}
        handleIndicatorStyle={styles.indicator}>
        <Text style={[typographyStyles.headline, styles.text]}>
          Popular Comic Publishers
        </Text>
        <BottomSheetScrollView>
          {publishers.map(renderItem)}
        </BottomSheetScrollView>
      </BottomSheet>
    );
  },
);

const imageStyle: CustomImageStyle = {
  height: heightPixel(50),
  width: widthPixel(100),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200,
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
    marginRight: pixelSizeHorizontal(spacing.md),
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: pixelSizeHorizontal(spacing.md),
    paddingVertical: pixelSizeVertical(spacing.xs),
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default PublisherBottomSheet;
