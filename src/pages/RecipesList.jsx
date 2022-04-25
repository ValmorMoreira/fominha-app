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

  const Recipe = ({ item }) => {

    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => handleClickRecipe(item)}
      >
        <Text style={styles.recipeTitle}>{item.name}</Text>

        <View style={styles.recipeFooter}>
          <Text>{item.text}</Text>
          {/* <Text>{item.text}</Text> */}
        </View>
      </TouchableOpacity>
    );
  };

  const handleClickRecipe = (item) => {
    console.log("Clicked on item " + item.id);
    console.log("navigator.navigate para: ", item);
  };


  return (
    <View>
      <Text style={styles.title}> Receitas </Text>
      <FlatList
        data={apiData}
        renderItem={Recipe}
        keyExtractor={(item) => item.index}
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
