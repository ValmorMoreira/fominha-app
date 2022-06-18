import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import apiData from "../data/database.json";


export default function RecipesList() {

  const handleClickRecipe = (item) => {
    console.log("Clicked on item " + item.name);
    console.log("navigator.navigate para: ", item);
  };

  const Recipe = ({ item }) => {

    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => handleClickRecipe(item)}
      >
        <Text style={styles.recipeTitle}>{item.name}</Text>

        <View style={styles.recipeFooter}>
          <Text>{item.text}</Text>
        </View>
      </TouchableOpacity>
    );
  };


  return (
    <View style={styles.bg}>
      <Text style={styles.title}> Receitas </Text>
      <FlatList
        data={apiData}
        renderItem={Recipe}
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
    backgroundColor: "white",
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
  bg:{
    backgroundColor:"purple",
  }
});
