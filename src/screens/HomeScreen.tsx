import React, {useState} from 'react';
import {ScrollView} from 'react-native';

import {globalStyles} from '@theme/index';
import ComicCharacterCarousel from '@features/home/ComicCharacterCarousel';
import PublishersHeader from '@features/home/PublishersHeader';
import CharacterFlatList from '@features/home/CharacterFlatList';
import ModalSelector from '@features/home/ModalSelector';

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView style={globalStyles.container}>
      <PublishersHeader onShow={modalVisible} toggle={setModalVisible} />
      <ComicCharacterCarousel />
      <CharacterFlatList headerTitle="Marvel Comics" />
      <CharacterFlatList headerTitle="DC Comics" />
      <CharacterFlatList headerTitle="Top Characters" />
      <ModalSelector onShow={modalVisible} toggle={setModalVisible} />
    </ScrollView>
  );
};

export default HomeScreen;
