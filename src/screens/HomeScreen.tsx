import React, {useRef} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {globalStyles} from '@theme/index';
import ComicCharacterCarousel from '@features/home/ComicCharacterCarousel';
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet';
import PublishersHeader from '@features/home/PublishersHeader';
import PublisherBottomSheet from '@features/home/PublisherBottomSheet';
import CharacterCards from '@components/CharacterCards';
import SectionHeader from '@components/SectionHeader';
import CharacterFlatList from '@features/home/CharacterFlatList';

const HomeScreen = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleShowBottomSheet = () => {
    bottomSheetRef.current?.snapToIndex(1);
  };
  return (
    <ScrollView style={globalStyles.container}>
      <PublishersHeader onShowBottomSheet={handleShowBottomSheet} />
      <ComicCharacterCarousel />
      <CharacterFlatList />
      <CharacterFlatList />
      <CharacterFlatList />
      <PublisherBottomSheet ref={bottomSheetRef} />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  components: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});
