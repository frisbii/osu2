import { StatusBar } from 'expo-status-bar';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import MenuButton from './MenuButton';

export default function PlayScreen({ onMenuClick }) {
  return (
    <View style={styles.playScreen}>
      <View style={styles.menu}>
        <MenuButton label="Home" onPress={onMenuClick} />
        <MenuButton label="Play" onPress={onMenuClick} />
        <MenuButton label="Stats" onPress={onMenuClick} />
      </View>
      <View style={styles.playField}>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  menu: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 10,
  },
  playField: {
    width: 250,
    height: 250,
    backgroundColor: '#949494',
    borderRadius: 5
  },
});
