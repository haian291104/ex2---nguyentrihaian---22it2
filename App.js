import React from 'react';
import { View, TouchableOpacity, Text, Alert, StyleSheet } from 'react-native';

const App = () => {
  const handlePress = () => {
    Alert.alert('Hello');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Tap Me</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000',
  },
  buttonText: {
    fontSize: 16,
  },
});

export default App;
