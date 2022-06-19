import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, Button, Switch } from 'react-native';

export default function RecipesList({navigation}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isEnabled, setIsEnabled] = useState(false);

    const handleRegister = () => {
        navigation.navigate("Cadastro");
    };

    const handleLoginValidate = () => {
        navigation.navigate("Home");
    };

    return (

        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../assets/images/logo-fominha.png')}
            />
            <Text style={styles.text}>Faça seu Login</Text>
            <TextInput
                style={styles.input} placeholder={'E-mail'} onChangeText={event => setEmail(event)} onChange={setEmail} value={email}
            />

            <TextInput
                style={styles.input} placeholder={'Password'} secureTextEntry={true} onChangeText={e => setPassword(e)} value={password}
            />

            <View style={styles.inline}>
                <Text style={styles.smallText}>Mantenha-me logado</Text>

                <Switch value={isEnabled} onValueChange={setIsEnabled} trackColor={{ false: "grey", true: "white" }}
                    thumbColor={isEnabled ? "green" : "#f4f3f4"} />
            </View>

            <Pressable style={styles.btn} onPress={handleLoginValidate} disabled={!isEnabled}>
                <Text style={styles.textWhite}>Login</Text>
            </Pressable>

            <View>
                <Pressable onPress={handleRegister}>
                    <Text style={styles.smallText}>Não possui uma conta? Clique aqui.</Text>
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
        width: 300,
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
