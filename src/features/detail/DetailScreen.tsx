import {StyleSheet, View, Button, Text, Dimensions} from 'react-native';
import React, {useCallback, useMemo, useRef} from 'react';
import FastImage from 'react-native-fast-image';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';

const {width, height} = Dimensions.get('window');

const DetailScreen = () => {
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);
  return (
    <View style={styles.container}>
      <FastImage
        style={styles.image}
        source={{
          uri: 'https://www.superherodb.com/pictures2/portraits/10/100/639.jpg',
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <BottomSheetModalProvider>
        <View style={styles.container}>
          <Button
            onPress={handlePresentModalPress}
            title="Present Modal"
            color="black"
          />
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}>
            <View style={styles.contentContainer}>
              <Text>Awesome 🎉</Text>
            </View>
          </BottomSheetModal>
        </View>
      </BottomSheetModalProvider>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: height * 0.5,
    width: width,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
