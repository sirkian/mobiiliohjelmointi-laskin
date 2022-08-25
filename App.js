import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [number, setNumber] = useState();
  const [number2, setNumber2] = useState();
  const [result, setResult] = useState('');

  const plusButtonPressed = () => {
    setResult(number + ' + ' + number2 + ' \n Result: ' + (parseFloat(number) + parseFloat(number2)));
    clearInputs();
  }

  const minusButtonPressed = () => {
    setResult(number + ' - ' + number2 + ' \n Result: ' + (parseFloat(number) - parseFloat(number2)));
    clearInputs();
  }

  const clearInputs = () => {
    setNumber();
    setNumber2();
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={{textAlign:'center'}}>{result}</Text>
      
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input}
          autoFocus={true}
          keyboardType='numeric'
          onChangeText={number => setNumber(number)}
          value={number}
          />
        <TextInput 
          style={styles.input}
          keyboardType='numeric'
          onChangeText={number => setNumber2(number)}
          value={number2}
          />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="+"
          onPress={plusButtonPressed}
          />
        <Button  
          title="-"
          onPress={minusButtonPressed}
          />
      </View>
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
  inputContainer: {
    width: '50%',
  },
  input: {
    textAlign: 'center',
    marginTop: 5,
    borderWidth: 1,
    borderRadius: 3,
    padding: 5
  },
  buttonContainer: {
    justifyContent: 'space-evenly',
    width: '30%',
    flexDirection: 'row',
    marginTop: 20,
  }
});
