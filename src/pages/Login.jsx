import React, { useState, useEffect } from "react";
import i18n from "../services/lang";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  Switch,
  ScrollView,
} from "react-native";

import Users from "../services/sqlite/Users";

export default function RecipesList({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEnabled, setIsEnabled] = useState(true);

  useEffect(() => {
    const reset = navigation.addListener('focus', () => {
      resetForm();
    });
    return reset;
  }, []);

  const resetForm = () => {
      setEmail('');
      setPassword('');
  }


  const handleRegister = () => {
    navigation.navigate("Cadastro");
  };

  const handleLoginValidate = () => {
    if (email == "" || password == "") {
      alert(`${i18n.t("fields")}`);
    }
    else {
      Users.findLogin(email)
        .then((result) => {
          if (email === result.email && password === result.password) {
            navigation.navigate("Home", { user: result });
          } else {
            alert(`${i18n.t("errorLogin")}`);
          }
        })
        .catch((error) => {
          console.error(error);
          alert("Ocorreu um erro ao buscar o usuário " + "Debug mode: " + error);
        });
    }

  };

  return (
    <ScrollView style={styles.bg}>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../../assets/images/logo-fominha.png")}
        />
        <Text style={styles.text}>{i18n.t("doYourLogin")}</Text>
        <TextInput
          style={styles.input}
          placeholder={"E-mail"}
          onChangeText={setEmail}
          value={email}
        />

        <TextInput
          style={styles.input}
          placeholder={i18n.t("password")}
          secureTextEntry={true}
          onChangeText={setPassword}
          value={password}
        />

        <View style={styles.inline}>
          <Text style={styles.smallText}>{i18n.t("keepLogged")}</Text>

          <Switch
            value={isEnabled}
            onValueChange={setIsEnabled}
            trackColor={{ false: "grey", true: "white" }}
            thumbColor={isEnabled ? "green" : "#f4f3f4"}
          />
        </View>

        <Pressable
          style={styles.btn}
          onPress={handleLoginValidate}
        //disabled={!isEnabled}
        >
          <Text style={styles.textWhite}>{i18n.t("btnLogin")}</Text>
        </Pressable>

        <View>
          <Pressable onPress={handleRegister}>
            <Text style={styles.smallText}>
              {i18n.t("withoutAccount")}
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
  },
  logo: {
    width: 300,
    height: 180,
    resizeMode: "contain",
  },
  input: {
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 50,
    borderBottomColor: "black",
    width: "90%",
    margin: 4,
    padding: 10,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 60,
    marginBottom: 20,
    color: "lightgrey",
  },
  inline: {
    flexDirection: "row",
    marginTop: 25,
    marginBottom: 15,
    alignContent: "space-around",
    alignItems: "center",
  },
  btn: {
    padding: 20,
    paddingVertical: 20,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "white",
    margin: 15,
  },
  textWhite: {
    fontSize: 22,
    color: "purple",
    textAlign: "center",
  },
  smallText: {
    color: "white",
  },
  bg: {
    backgroundColor: "purple",
  },
});
