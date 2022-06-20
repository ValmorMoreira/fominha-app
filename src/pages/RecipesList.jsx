import React, { useMemo, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import SearchBox from "../components/SearchBox";

//Efetuar busca em API de receitas para sugestões pro usuário
//import API_Data_New from "../services/API_Data_New";

import apiData from "../data/database.json";

export default function RecipesList() {
  const [flData, setFlData] = useState(apiData);

  const handleClickRecipe = (item) => {
    console.log("Clicked on item " + item.name);
    console.log("navigator.navigate para: ", item);
  };

  const onSearch = (searchString) => {
    console.log("Search for: ", searchString);

    const filteredData = apiData.filter((item) => {
      const lowName = item.name.toLowerCase();
      return lowName.includes(searchString.toLowerCase());
    });

    setFlData(filteredData);
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
      <Text style={styles.title}> Dicas de receitas </Text>
      <SearchBox onSearch={onSearch} />
      <FlatList
        data={flData}
        renderItem={Recipe}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: "white",
  },
  itemContainer: {
    margin: 10,
    backgroundColor: "white",
    marginBottom: 8,
    padding: 20,
    borderRadius: 5,
    borderColor: "#000",
    borderWidth: 1,
  },
  recipeTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  recipeFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bg: {
    backgroundColor: "purple",
    flex: 1,
  },
});
