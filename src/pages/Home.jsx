import { StyleSheet, View, Text, Pressable, ScrollView } from "react-native";
import React from "react";
import i18n from "../services/lang";

export default function Home({ navigation, route }) {
  const { user } = route.params;

  const handleAbout = () => {
    navigation.navigate("About");
  };

  const handleRecipeRegister = () => {
    navigation.navigate("Cadastro de receita");
  };

  const handleRecipesList = () => {
    navigation.navigate("Dicas de Burgers");
  };

  const handleMyRecipes = () => {
    navigation.navigate("Minhas receitas");
  };

  const handleLogout = () => {
    navigation.navigate("Login");
    alert(`${i18n.t("userExit")}`);
  };

  return (
    <ScrollView style={styles.bg}>
      <View style={styles.container}>
        <>
          {/* <Text style={styles.textHome}>Seja Bem Vindo!</Text> */}
          <Text style={styles.textHome}>{i18n.t("welcome")}!</Text>

          <Text style={styles.textUpperCase}>{user.name}</Text>
        </>
        <>
          <Pressable style={styles.btn} onPress={handleRecipeRegister}>
            <Text style={styles.textWhite}>{i18n.t("btnRecipeRegister")}</Text>
          </Pressable>
          <Pressable style={styles.btn} onPress={handleRecipesList}>
            <Text style={styles.textWhite}>{i18n.t("btnBurgersTips")}</Text>
          </Pressable>
          <Pressable style={styles.btn} onPress={handleMyRecipes}>
            <Text style={styles.textWhite}>{i18n.t("btnMyRecipes")}</Text>
          </Pressable>
          <Pressable style={styles.btn} onPress={handleAbout}>
            <Text style={styles.textWhite}>{i18n.t("aboutApp")}</Text>
          </Pressable>
          <Pressable style={styles.btn} onPress={handleLogout}>
            <Text style={styles.textWhite}>{i18n.t("exit")}</Text>
          </Pressable>
        </>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textWhite: {
    fontSize: 22,
    color: "purple",
    textAlign: "center",
  },
  textHome: {
    fontSize: 22,
    color: "white",
    textAlign: "center",
    marginTop: 50,
  },
  textUpperCase: {
    fontSize: 45,
    textAlign: "center",
    color: "#fff",
  },
  btn: {
    paddingVertical: 20,
    borderRadius: 50,
    elevation: 3,
    backgroundColor: "white",
    margin: 15,
  },
  bg: {
    backgroundColor: "purple",
  },
});
