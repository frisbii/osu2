import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

import HomeScreen from './components/HomeScreen';
import PlayScreen from './components/PlayScreen';

export default function App() {
  const [screen, setScreen] = useState('Home');

  function onMenuClick( label ) {
    if (label === 'Home') {
      setScreen('Home');
    } else if (label === 'Play') {
      setScreen('Play');
    } else {
      alert('a')
    }
  }

  return (
    <View style={styles.container}>
      {(screen === 'Home') && <HomeScreen onPress={onMenuClick} />}
      {(screen === 'Play') && <PlayScreen onMenuClick={onMenuClick} />}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
