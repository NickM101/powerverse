import React, {useRef} from 'react';
import {View} from 'react-native';
import {globalStyles} from '@theme/index';
import ComicCharacterCarousel from '@features/home/ComicCharacterCarousel';
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet';
import PublishersHeader from '@features/home/PublishersHeader';
import PublisherBottomSheet from '@features/home/PublisherBottomSheet';
import CharacterCards from '@components/CharacterCards';
import SectionHeader from '@components/SectionHeader';

const HomeScreen = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleShowBottomSheet = () => {
    bottomSheetRef.current?.snapToIndex(1);
  };
  return (
    <View style={globalStyles.container}>
      <PublishersHeader onShowBottomSheet={handleShowBottomSheet} />
      <ComicCharacterCarousel />
      <SectionHeader />
      {/* <View style={}>
        <CharacterCards />
        <CharacterCards />
        <CharacterCards />
        <CharacterCards />
        <CharacterCards />
      </View> */}
      <PublisherBottomSheet ref={bottomSheetRef} />
    </View>
  );
};

export default HomeScreen;
