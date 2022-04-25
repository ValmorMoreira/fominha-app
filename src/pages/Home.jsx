import { StyleSheet, View, Text, Pressable } from "react-native";
import React from "react";

const login = {
    user: "Valmor",
    message: "Thanks for passing params!",
};

export default function Home({ navigation }) {

    const handleAbout = () => {
        navigation.navigate("About");
    };

    const handleRecipeRegister = () => {
        navigation.navigate("Cadastro de receita");
    };

    const handleRecipesList = () => {
        navigation.navigate("Minhas receitas");
    };

    const handleFavorite = () => {
        navigation.navigate("Favoritas");
    };
    
    const handleMyRecipes = () => {
        navigation.navigate("Minhas receitas");
    };

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.textWhite}>Seja Bem Vindo!</Text>
                <Text style={styles.textUpperCase}>{login.user}</Text>
            </View>
            <View>
                <Pressable style={styles.btn} onPress={handleRecipeRegister}>
                    <Text style={styles.textWhite}>Cadastrar receita</Text>
                </Pressable>
                <Pressable style={styles.btn} onPress={handleRecipesList}>
                    <Text style={styles.textWhite}>Visualizar receitas</Text>
                </Pressable>
                <Pressable style={styles.btn} onPress={handleFavorite}>
                    <Text style={styles.textWhite}>Favoritas</Text>
                </Pressable>
                <Pressable style={styles.btn} onPress={handleMyRecipes}>
                    <Text style={styles.textWhite}>Minhas receitas</Text>
                </Pressable>
                <Pressable style={styles.btn} onPress={handleAbout}>
                    <Text style={styles.textWhite}>Sobre o App</Text>
                </Pressable>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#AFAFAF",
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    textWhite: {
        fontSize: 20,
        color: "#fff",
        textAlign:"center",
    },
    textUpperCase: {
        fontSize: 60,
        textAlign: "center",
        color:"#fff"
    },
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        paddingHorizontal: 60,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: "#3B76ED",
        margin:15,
    },
});
