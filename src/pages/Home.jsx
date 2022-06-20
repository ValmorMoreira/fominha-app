import { StyleSheet, View, Text, Pressable, ScrollView } from "react-native";
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
        navigation.navigate("Visualizar receitas");
    };

    const handleFavorite = () => {
        navigation.navigate("Favoritas");
    };

    const handleMyRecipes = () => {
        navigation.navigate("Minhas receitas");
    };

    return (
        <ScrollView style={styles.bg}>
            <View style={styles.container}>
                <>
                    <Text style={styles.textHome}>Seja Bem Vindo!</Text>
                    <Text style={styles.textUpperCase}>{login.user}</Text>
                </>
                <>
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
