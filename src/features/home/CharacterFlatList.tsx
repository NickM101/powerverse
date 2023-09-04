import {View, FlatList, ListRenderItem} from 'react-native';
import React, {useCallback} from 'react';
import CharacterCards from '@components/CharacterCards';
import SectionHeader from '@components/SectionHeader';

interface CharacterFlatListProps {
  headerTitle: string;
}

const CharacterFlatList: React.FC<CharacterFlatListProps> = ({headerTitle}) => {
  const renderItem: ListRenderItem<number> = useCallback(
    _ => <CharacterCards />,
    [],
  );

  return (
    <View>
      <SectionHeader title={headerTitle} />
      <FlatList
        horizontal
        data={[1, 2, 3, 4, 5, 6, 7]}
        renderItem={renderItem}
      />
    </View>
  );
};

export default CharacterFlatList;
