import { StyleSheet, View, Text } from "react-native";
import React from "react";

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Fominha - Version 1.0</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    color: "blue",
  },
});
