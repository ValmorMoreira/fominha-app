import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
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
            <StatusBar style="auto" />
            <Text style={styles.text}>Seja bem vindo ao Fominha App</Text>
            <Image
                style={styles.logo}
                source={require('../../assets/images/logo.png')}
            />
            <Text style={styles.text}>Faça seu Login</Text>
            <TextInput
                style={styles.input} placeholder={'E-mail'} onChangeText={event => setEmail(event)} onChange={setEmail} value={email}
            />

            <TextInput
                style={styles.input} placeholder={'Password'} secureTextEntry={true} onChangeText={e => setPassword(e)} value={password}
            />

            <View style={styles.inline}>
                <Text>Mantenha-me logado</Text>

                <Switch value={isEnabled} onValueChange={setIsEnabled} trackColor={{ false: "grey", true: "green" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"} />
            </View>

            <Pressable style={styles.btn} onPress={handleLoginValidate} disabled={!isEnabled}>
                <Text style={styles.textWhite}>Login</Text>
            </Pressable>

            <View>
                <Pressable onPress={handleRegister}>
                    <Text>Não possui uma conta? Clique aqui.</Text>
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
        height: 100,
        resizeMode: "contain",
    },
    input: {
        backgroundColor:"white",
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 5,
        borderBottomColor: "black",
        width: "90%",
        margin: 4,
        padding: 6,
    },
    text: {
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
        marginTop: 10,
        marginBottom: 20,
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
    }
});
