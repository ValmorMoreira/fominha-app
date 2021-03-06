import { StyleSheet, View, Text, Image, TextInput, Button, Pressable} from "react-native";
import React, { useState } from 'react';
import i18n from "../services/lang";

import Users from '../services/sqlite/Users';

export default function Register({navigation}) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSuccess = () => {
    navigation.navigate("Login");
  };

  const handleRegister = () => {
    create()
  }

  const create = () => {
    if(name != "" && email != "" && password != ""){
        Users.create({ name: name, email: email,  password: password })
        .then(id => alert(`${i18n.t("userRegisterSuccess")}`))
        .catch(err => console.log(err));
  
      Users.all()
        .then(recipe => console.log(recipe))
        .catch(err => console.log(err));
  
      handleSuccess();
    }else{
        alert(`${i18n.t("fields")}`);
    }
   
  };


  return (

    <View style={styles.container}>
        <Image
            style={styles.logo}
            source={require('../../assets/images/logo-fominha.png')}
        />
        <Text style={styles.text}>{i18n.t("userRegister")}</Text>
        <TextInput
            style={styles.input} placeholder={i18n.t("userName")} onChangeText={event => setName(event)} onChange={setName} value={name}
        />
        <TextInput
            style={styles.input}  placeholder={'E-mail'} onChangeText={event => setEmail(event)} onChange={setEmail} value={email}
        />

        <TextInput
            style={styles.input} placeholder={i18n.t("password")} secureTextEntry={true} onChangeText={e => setPassword(e)} value={password}
        />

        <Pressable style={styles.btn} onPress={handleRegister}  >
            <Text style={styles.textWhite}>{i18n.t("btnRegister")}</Text>
        </Pressable>

        <View>
            <Pressable onPress={handleSuccess}>
                <Text style={styles.smallText}>{i18n.t("withAccount")}</Text>
            </Pressable>
        </View>

    </View>
);

}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: "purple",
      alignItems: 'center',
      justifyContent: 'center',
  },
  logo: {
      width: 200,
      height: 180,
      resizeMode: "contain",
  },
  input: {
      backgroundColor:"white",
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
      color:"lightgrey",
  },
  inline: {
      flexDirection: "row",
      marginTop: 25,
      marginBottom: 15,
      alignContent: "space-around",
      alignItems: "center",
  },
  btn: {
    padding:20,
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
smallText:{
    color:"white",
}
});