import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [counter , setCounter] = useState(0);
  const handleIncrement = () => setCounter((prev) => prev + 1);
  const handleDecrement = () => setCounter((prev) => prev - 1);
  const handleReset = () => setCounter(0);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native Counter</Text>
      <Text style={styles.counterText}>{counter}</Text>
      <View style={styles.buttonRow}>
      <TouchableOpacity onPress={handleDecrement}>
        <Text style ={styles.Buttontext}>- Decrement </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleIncrement}>
        <Text style ={styles.Buttontext}>+ Increment </Text>
      </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleReset}>
        <Text style ={styles.Buttontext}>Reset</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight:'bold',
    marginBottom: 20,
    color: '#333'
  },
  buttonRow:{
    flexDirection : 'row',
    marginBottom : 40
  },
  Buttontext:{
  },
});
