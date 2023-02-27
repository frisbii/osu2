import { Text, Pressable, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function MenuButton({ label, onPress }) {
  return (
    <Pressable style={styles.iconButton} onPress={() => { onPress(label) }}>
      <Text style={styles.iconButtonLabel}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    backgroundColor: '#69A0AB',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 30,
    borderRadius: 5,
  },
  iconButtonLabel: {
    color: '#fff',
  },
});

