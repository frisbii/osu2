import { StatusBar } from 'expo-status-bar';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

export default function HomeScreen({ onPress }) {
  return (
    <View style={styles.home}>
      <Text style={styles.homeLabel}>HELLO!</Text>
      <Text style={[styles.homeLabel, {fontSize: 50} ]}>welcome to the party 🥳</Text>
      <Pressable style={styles.homeButton} onPress={() => onPress('Play')}>
        <Text style={styles.homeButtonLabel}>yes</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  home : {
    width: '50%',
    height: '50%',
    backgroundColor: '#181818',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  homeLabel : {
    color: 'white',
    fontSize: 100,
  },
  homeButton : {
    padding: 10,
    backgroundColor: '#69A0AB',
    width: '50%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  homeButtonLabel :{
    color: 'white',
    fontSize: 20,
  },
});
