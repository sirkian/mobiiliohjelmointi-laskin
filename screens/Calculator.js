import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

export default function Calculator({ navigation }) {
  const [number, setNumber] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState("");
  const [history, setHistory] = useState([]);

  const calculate = (operator) => {
    const [value1, value2] = [Number(number), Number(number2)];
    let equals;

    switch (operator) {
      case "+":
        equals = value1 + value2;
        break;

      case "-":
        equals = value1 - value2;
        break;
    }

    const operation = number + operator + number2 + " = " + equals;
    setResult(equals);
    setHistory([...history, operation]);
    setNumber("");
    setNumber2("");
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Result: {result}</Text>
        <TextInput
          style={styles.input}
          autoFocus={true}
          keyboardType="numeric"
          onChangeText={(number) => setNumber(number)}
          value={number}
        />
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={(number) => setNumber2(number)}
          value={number2}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="+" onPress={() => calculate("+")} />
        <Button title="-" onPress={() => calculate("-")} />
        <Button
          title="History"
          onPress={() => navigation.navigate("History", { history: history })}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
  },
  inputContainer: {
    width: "50%",
    marginTop: 100,
  },
  input: {
    backgroundColor: "#bababa",
    textAlign: "center",
    borderRadius: 2,
    padding: 5,
    margin: 5,
  },
  buttonContainer: {
    justifyContent: "space-evenly",
    flexDirection: "row",
    margin: 10,
    width: 160,
  },
  text: {
    textAlign: "center",
    margin: 5,
    fontSize: 16,
  },
});
