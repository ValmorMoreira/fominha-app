import { StyleSheet, View, Text, Button, Pressable, Image } from "react-native";
import React, { useContext } from "react";
import { ModalContext } from "../components/AppModal";
import i18n from "../services/lang";

export default function About() {

  const appModal = useContext(ModalContext);

  const handleModal = () => {
    appModal.show(
      <View style={styles.modal}>
        <Text>{i18n.t("easterEgg")}</Text>
        <Image
                style={styles.logo}
                source={require('../../assets/images/react.gif')}
            />
        <Button title="OK" onPress={() => appModal.hide()} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Image
                style={styles.logo}
                source={require('../../assets/images/logo-fominha.png')}
            />
      <Text style={styles.text}>{i18n.t("aboutDesc")}</Text>
      <Text style={styles.text}>Valmor Moreira</Text>
      <Text style={styles.text}>{i18n.t("version")}</Text>
      <Pressable style={styles.btn} onPress={handleModal}>
        <Text style={styles.textWhite}>Easter Egg</Text>
      </Pressable>
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
    fontSize: 18,
    color: "white",
  },
  textWhite: {
    fontSize: 22,
    color: "purple",
    textAlign: "center",
},
btn: {
    paddingVertical: 20,
    paddingHorizontal:20,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "white",
    margin: 15,
},
logo:{
  marginBottom:80,
  width: 300,
  height: 180,
  resizeMode: "contain",
}
});
