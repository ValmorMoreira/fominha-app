import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import Recipes from "../services/sqlite/Recipes";

export default function MyRecipes() {

  const [recipesList, setRecipesList] = useState([]);

  // com Promises
  useEffect(() => {
    let database = Recipes.all();
    database.then((database) => {
      setRecipesList(database);
    })
      .catch((error) => {
        alert("Ocorreu um erro ao buscar os items " + "Debug mode: " + error);
      });
  }, []);

  const handleClickRecipe = (item) => {
    console.log("Clicked on item " + JSON.stringify(item));
    console.log("navigator.navigate para: ", item.id);
    //navigation.navigate("Detalhes da receita", { item }); aqui vai direcionar pra tela de detalhes da receita
  };

  const Recipe = ({ item }) => {
    return (
      <TouchableOpacity 
        onPress={() => handleClickRecipe(item)}
      >
        <View style={styles.itemContainer}>
          <Text style={styles.recipeTitle}> Nome: {item.name}</Text>
          <View >
            <Text style={styles.recipeCategory}>Categoria: {item.category}</Text>
            <Text>Ingredientes: {item.ingredients}</Text>
          </View>
          <View style={styles.image}>
            <Image
              style={styles.logo}
              source={require('../../assets/images/logo.png')}
            />
            
          </View>
          <Text> Clique para ver mais detalhes (Em breve) </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.bg}>
      <Text style={styles.title}></Text>
      <FlatList
        data={recipesList}
        renderItem={Recipe}
        keyExtractor={(_item, index) => index}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    position:"relative",
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 3,
    marginRight: 5,
    marginLeft: 5,
    color:"white",
  },
  itemContainer: {
    backgroundColor: "white",
    margin: 10,
    marginBottom: 8,
    padding: 20,
    borderRadius: 5,
    borderColor: "#000",
    borderWidth: 1,
    position:"relative",
  },
  recipeTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color:"purple",
  },
  recipeFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  recipeCategory: {
    color:"brown",
  },
  image:{
    width:150,
    position:"relative",
    marginLeft: 200,
    alignItems:"center",
    paddingVertical: 20,
    backgroundColor:"black",
  },
  bg: {
    backgroundColor:"purple",
    height:1000,
  }
});