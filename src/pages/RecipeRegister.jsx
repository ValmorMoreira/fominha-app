import { StyleSheet, View, Text } from "react-native";
import React from "react";

export default function RecipeRegister() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela de Cadastro, depende do Banco de Dados</Text>
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
    fontSize: 15,
    color: "blue",
  },
});
