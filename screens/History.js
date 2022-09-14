import { StyleSheet, Text, View, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";

export default function History({ route, navigation }) {
  const { history } = route.params;
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.listContainer}>
        <Text style={styles.textH1}>History</Text>
        <FlatList
          data={history}
          renderItem={({ item }) => <Text style={styles.text}>{item}</Text>}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#bababa",
    height: "100%",
  },
  listContainer: {
    alignItems: "center",
    width: "100%",
    padding: 20,
  },
  textH1: {
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 20,
    fontSize: 20,
  },
  text: {
    textAlign: "center",
    marginBottom: 4,
    fontSize: 16,
  },
});
