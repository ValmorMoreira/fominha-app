import { StyleSheet, View, Text } from "react-native";
import React from "react";

export default function Favorite() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Você ainda não possui receitas salvas...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    color: "white",
  },
});