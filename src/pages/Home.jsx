import { StyleSheet, View, Text, Pressable, ScrollView } from "react-native";
import React from "react";

export default function Home({navigation , route}) {

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
    };

    return (
        <ScrollView style={styles.bg}>
            <View style={styles.container}>
                <>
                    <Text style={styles.textHome}>Seja Bem Vindo!</Text>
                    <Text style={styles.textUpperCase}>{user.name}</Text>
                </>
                <>
                    <Pressable style={styles.btn} onPress={handleRecipeRegister}>
                        <Text style={styles.textWhite}>Cadastrar receita</Text>
                    </Pressable>
                    <Pressable style={styles.btn} onPress={handleRecipesList}>
                        <Text style={styles.textWhite}>Dicas de Burgers</Text>
                    </Pressable>
                    <Pressable style={styles.btn} onPress={handleMyRecipes}>
                        <Text style={styles.textWhite}>Minhas receitas</Text>
                    </Pressable>
                    <Pressable style={styles.btn} onPress={handleAbout}>
                        <Text style={styles.textWhite}>Sobre o App</Text>
                    </Pressable>
                    <Pressable style={styles.btn} onPress={handleLogout}>
                        <Text style={styles.textWhite}>Sair</Text>
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
        marginTop:50,
    },
    textUpperCase: {
        fontSize: 45,
        textAlign: "center",
        color: "#fff"
    },
    btn: {
        paddingVertical: 20,
        borderRadius: 50,
        elevation: 3,
        backgroundColor: "white",
        margin: 15,
    },
    bg:{
        backgroundColor:"purple",
    }
});
