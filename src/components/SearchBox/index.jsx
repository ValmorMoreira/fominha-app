import { Button, StyleSheet, TextInput, View } from 'react-native';
import { Feather, Entypo } from "@expo/vector-icons";

import Recipes from '../../services/sqlite/Recipes';

export default function SearchBox() {

    const searchRecipe = () => {
        Recipes.find({ ingredients: ingredients })
            .then(id => alert("Receita cadastrada com sucesso!"))
            .catch(err => console.log(err));

        Recipes.all()
            .then(recipe => console.log(recipe))
            .catch(err => console.log(err));
    };

    return (
        <View style={styles.searchbar}>
            <View style={styles.container}>
            <Feather
                name="search"
                size={25}
                color="black"
            />
            <TextInput
                style={styles.input} placeholder={'Buscar por ingrediente'}
            />
        </View>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container:{
        margin: 0,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        width: "90%",
    },
    input: {
        fontSize: 20,
        marginLeft: 10,
        width: "90%",
    },
    searchbar:{
        marginBottom:5,
        padding: 10,
        flexDirection: "row",
        width: "80%",
        backgroundColor: "white",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "space-evenly",
        marginLeft:35,
    },
});