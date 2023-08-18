import {StyleSheet, View, Text, Dimensions} from 'react-native';
import React, {useMemo, useRef, useEffect} from 'react';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import FlatListCard from '../../components/FlatListCard';

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
      <FlatListCard
        imageSource={
          'https://www.superherodb.com/pictures2/portraits/10/100/639.jpg'
        }
        text="Batman"
        item="Batman"
        height={height * 0.5}
        width={width}
      />
      <BottomSheetModalProvider>
        <View style={styles.container}>
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            snapPoints={snapPoints}
            enablePanDownToClose={false}>
            <Text>Awesome 1</Text>
          </BottomSheetModal>
          <BottomSheetModal
            ref={bottomSheetModalRef2}
            index={1}
            snapPoints={snapPoints2}
            enablePanDownToClose={false}>
            <Text>Awesome 2</Text>
          </BottomSheetModal>
          <BottomSheetModal
            ref={bottomSheetModalRef3}
            index={1}
            snapPoints={snapPoints3}
            enablePanDownToClose={false}>
            <Text>Awesome 3</Text>
          </BottomSheetModal>
          <BottomSheetModal
            ref={bottomSheetModalRef4}
            index={1}
            snapPoints={snapPoints4}
            enablePanDownToClose={false}>
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
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
