import { StyleSheet, View, Text } from "react-native";
import React from "react";

export default function Register({ route }) {
  //const login = route.params.login; (é a mesma coisa que a linha de baixo)
  const { login } = route.params;

    if(JSON.stringify(login) === '{}'){
        return <View style={styles.container}> 
                    <Text> Page Hello </Text> 
                </View>
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello {login.user}</Text>
            <Text> {login.message} </Text>
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
  },
});