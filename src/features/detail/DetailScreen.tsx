import {StyleSheet, View, Button, Text, Dimensions} from 'react-native';
import React, {useCallback, useMemo, useRef, useEffect} from 'react';
import FastImage from 'react-native-fast-image';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';

const {width, height} = Dimensions.get('window');

const DetailScreen = () => {
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const bottomSheetModalRef2 = useRef<BottomSheetModal>(null);
  const bottomSheetModalRef3 = useRef<BottomSheetModal>(null);
  const bottomSheetModalRef4 = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['50%', '50%', '90%'], []);
  const snapPoints2 = useMemo(() => ['40%', '40%', '80%'], []);
  const snapPoints3 = useMemo(() => ['30%', '30%', '70%'], []);
  const snapPoints4 = useMemo(() => ['20%', '20%', '50%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
    bottomSheetModalRef2.current?.present();
    bottomSheetModalRef3.current?.present();
    bottomSheetModalRef4.current?.present();
  }, []);

  useEffect(() => {
    bottomSheetModalRef.current?.present();
    bottomSheetModalRef2.current?.present();
    bottomSheetModalRef3.current?.present();
    bottomSheetModalRef4.current?.present();

    return () => {};
  }, [
    bottomSheetModalRef,
    bottomSheetModalRef2,
    bottomSheetModalRef3,
    bottomSheetModalRef4,
  ]);

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
            enablePanDownToClose={false}
            closeOnOverlayTap={false}>
            <Text>Awesome 1</Text>
          </BottomSheetModal>
          <BottomSheetModal
            ref={bottomSheetModalRef2}
            index={1}
            snapPoints={snapPoints2}
            enablePanDownToClose={false}
            closeOnOverlayTap={false}>
            <Text>Awesome 2</Text>
          </BottomSheetModal>
          <BottomSheetModal
            ref={bottomSheetModalRef3}
            index={1}
            snapPoints={snapPoints3}
            enablePanDownToClose={false}
            closeOnOverlayTap={false}>
            <Text>Awesome 3</Text>
          </BottomSheetModal>
          <BottomSheetModal
            ref={bottomSheetModalRef4}
            index={1}
            snapPoints={snapPoints4}
            enablePanDownToClose={false}
            closeOnOverlayTap={false}>
            <Text>Awesome 4</Text>
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
