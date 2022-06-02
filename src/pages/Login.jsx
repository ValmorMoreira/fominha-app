import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Pressable, Button, Switch, SafeAreaView } from 'react-native';

export default function RecipesList({navigation}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isEnabled, setIsEnabled] = useState(false);

    const handleRegister = () => {
        navigation.navigate("Cadastro");
    };

    return (

        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <Image
                style={styles.logo}
                source={require('../../assets/images/logo.png')}
            />
            <Text style={styles.text}>Sign Up!</Text>
            <TextInput
                style={styles.input} placeholder={'E-mail'} onChangeText={event => setEmail(event)} onChange={setEmail} value={email}
            />

            <TextInput
                style={styles.input} placeholder={'Password'} secureTextEntry={true} onChangeText={e => setPassword(e)} value={password}
            />

            <View style={styles.inline}>
                <Text>Subscribe to Newsletter</Text>

                <Switch value={isEnabled} onValueChange={setIsEnabled} trackColor={{ false: "grey", true: "green" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"} />
            </View>

            <Button title={"Let's Go!"} onPress={() =>
                console.log("E-mail " + email + "  Password: " + password)}
                disabled={!isEnabled}
            />

            <View>
                <Pressable onPress={handleRegister}>
                    <Text>Não possui uma conta? Clique aqui.</Text>
                </Pressable>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#AFAFAF",
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 200,
        height: 100,
        resizeMode: "contain",
    },
    input: {
        color: "grey",
        borderColor: "lightgrey",
        borderWidth: 2,
        borderRadius: 5,
        borderBottomColor: "lightgrey",
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
    }
});
