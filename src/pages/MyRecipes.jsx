import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import Recipes from "../services/sqlite/Recipes";

const allRecipes = Recipes.all();

console.log(JSON.stringify(Recipes.all()));


export default function MyRecipes() {

  const Recipe = ({ item }) => {

    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => handleClickRecipe(item)}
      >
        <Text style={styles.recipeTitle}>{item.id}</Text>
        <Text style={styles.recipeTitle}>{item.name}</Text>
        <View style={styles.recipeFooter}>
          <Text style={styles.recipeTitle}>{item.category}</Text>
          <Text style={styles.recipeTitle}>{item.ingredients}</Text>
          <Text style={styles.recipeTitle}>{item.prepareMode}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const handleClickRecipe = (item) => {
    console.log("Clicked on item " + item);
    console.log("navigator.navigate para: ", item.id);
  };


  return (
    <View>
      <Text style={styles.title}></Text>
      <FlatList
        data={JSON.stringify(allRecipes)}
        renderItem={Recipe}
        //keyExtractor={(item) => item.index}
        keyExtractor={(item, index) => index} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
  itemContainer: {
    backgroundColor: "#ddd",
    marginBottom: 8,
    padding: 20,
    borderRadius: 5, 
    borderColor: "#000",
    borderWidth:1,
  },
  recipeTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  recipeFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});