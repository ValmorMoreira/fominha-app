import { StyleSheet, View, Text, Button } from "react-native";
import React, { useContext } from "react";

//import { ModalContext } from "../components/AppModal";


export default function About() {


  //*Tentei usar mas deu erro devido uso do setState para evitar loops */
  // const appModal = useContext(ModalContext);

  // appModal.show(
  //   <View>
  //     <Text>Olha só, um teste de modal! !EasterEgg! HAHAHAHA</Text>
  //     <Button title="OK" onPress={() => appModal.hide()} />
  //   </View>
  // );

  return (
    <View style={styles.container}>
      <Text style={styles.text}> Todos os dieritos reservados</Text>
      <Text style={styles.text}>Valmor Moreira</Text>
      <Text style={styles.text}>Fominha - Version 1.0</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#AFAFAF",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    color: "blue",
  },
});
