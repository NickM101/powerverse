import {StyleSheet, View, Text, Switch, useColorScheme} from 'react-native';
import React from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/reduxHooks';
import {setThemeMode} from '../../redux/slice/themeSlice';

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const colorScheme = useColorScheme();
  const mode = useAppSelector(state => state.theme.mode);

  const toggleTheme = () => {
    const newTheme = mode === 'light' ? 'dark' : 'light';
    dispatch(setThemeMode(newTheme));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Color - {colorScheme}</Text>
      <Switch value={mode === 'dark'} onValueChange={toggleTheme} />
    </View>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'black',
  },
});
