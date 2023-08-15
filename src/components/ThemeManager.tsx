import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const ThemeManager = ({children}: {children: React.ReactNode}) => {
  return (
    <LinearGradient
      style={styles.container}
      colors={
        true
          ? ['#F8F8F8', '#C69F9B', '#180B2C']
          : ['#6F225F', '#2F0E3C', '#180B2C']
      }
      start={{x: 0.2, y: 0.4}}>
      <StatusBar barStyle={'light-content'} />
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
