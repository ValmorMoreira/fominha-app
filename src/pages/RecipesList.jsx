import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import SearchBox from "../components/SearchBox";
import axios from "axios";
import i18n from '../services/lang';

import api from "../services/api";

export default function RecipesList() {

  const [flData, setFlData] = useState([]);
  const [masterData, setMasterData] = useState([]);

  useEffect(() => {
    getApi();
  }, []);

  const getApi = () =>{
    axios.request(api).then((response) => {
      setFlData(response.data);
      setMasterData(response.data);
    });
  }

   const handleClickRecipe = (item) => {
    console.log("Clicked on item " + item.name);
    console.log("navigator.navigate para: ", item);
  };

  const onSearch = (searchString) => {
    console.log("Search for: ", searchString);
    const filteredData = masterData.filter((item) => {
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
        <Text style={styles.burgerTitle}>{item.name}</Text>
        <View style={styles.burgerContent}>
          <Text>{i18n.t("ingredients")}: </Text>
          <Text> {item.ingredients} </Text>
        </View>
        <View >
          <Text style={styles.burgerFooter}>{i18n.t("restaurant")}: {item.restaurant}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  if(masterData == 0){
    return (
      <View style={styles.bg}>
        <Text style={styles.title}>{i18n.t("btnBurgersTips")}</Text>
        <SearchBox onSearch={onSearch} />
        <Text style={styles.title}>{i18n.t("loading")}</Text>
      </View>
    )
  }

  if(flData == 0){
    return (
      <View style={styles.bg}>
        <Text style={styles.title}>{i18n.t("btnBurgersTips")}</Text>
        <SearchBox onSearch={onSearch} />
        <Text style={styles.title}>{i18n.t("searchErrorApi")}</Text>
      </View>
    )
  }

  return (
    <View style={styles.bg}>
      <Text style={styles.title}>{i18n.t("btnBurgersTips")}</Text>
      <SearchBox onSearch={onSearch} />
      <FlatList
        data={flData}
        renderItem={Recipe}
        keyExtractor={(_item, index) => index}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: "white",
    textAlign:"center",
    margin:5,
  },
  itemContainer: {
    margin: 10,
    backgroundColor: "lightblue",
    marginBottom: 2,
    padding: 15,
    borderRadius: 15,
    borderColor: "#000",
    borderWidth: 1,
  },
  burgerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    padding:10,
  },
  burgerContent: {
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor:"white",
    borderRadius:20,
    margin:2,
    padding:10,
  },
  burgerFooter: {
    color:"blue",
  },
  bg: {
    backgroundColor: "purple",
    flex: 1,
  },
});
