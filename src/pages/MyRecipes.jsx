import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";

import { ModalContext } from "../components/AppModal";

import SearchBox from "../components/SearchBox";

import Recipes from "../services/sqlite/Recipes";

export default function MyRecipes() {
  const [recipesList, setRecipesList] = useState([]);

  // com Promises
  useEffect(() => {
    let query = Recipes.all();
    query
      .then((result) => {
        setRecipesList(result);
      })
      .catch((error) => {
        alert("Ocorreu um erro ao buscar os items " + "Debug mode: " + error);
      });
  }, []);


  const onSearch = (searchString) => {
    let query = Recipes.findByName(searchString);
    query
      .then((result) => {
        setRecipesList(result);
      })
      .catch((error) => {
        console.log(error);
        alert(`Nenhum registro encontrado para ${searchString}!`);
      });
  };

  const appModal = useContext(ModalContext);

  const handleModal = () => {
    appModal.show(
      <View style={styles.modal}>
        <Text style={styles.recipeTitle}>Nome da Receita</Text>
        <Image
          style={styles.image}
          source={require("../../assets/images/default.jpg")}
        />
        <View>
          <Text style={styles.recipeIngredientsAndPrepare}>Ingredientes</Text>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
          <Text style={styles.recipeIngredientsAndPrepare}>
            Modo de Preparo
          </Text>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
        </View>
        <Button title="Voltar" onPress={() => appModal.hide()} />
      </View>
    );
  };

  const Recipe = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => handleModal()}>
        <View style={styles.itemContainer}>
          <Text style={styles.recipeTitle}> {item.name}</Text>
          <View>
            <Text style={styles.recipeCategory}>
              Categoria - {item.category}
            </Text>
          </View>
          <Image
            style={styles.image}
            source={require("../../assets/images/default.jpg")}
          />
          <Text style={styles.smallText}> Clique para ver mais detalhes</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.bg}>
      <Text style={styles.title}></Text>
      <SearchBox onSearch={onSearch} />
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
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 3,
    marginRight: 5,
    marginLeft: 5,
    color: "white",
  },
  itemContainer: {
    backgroundColor: "white",
    margin: 10,
    marginBottom: 8,
    padding: 15,
    borderRadius: 5,
  },
  recipeTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "purple",
  },
  recipeIngredientsAndPrepare: {
    fontSize: 25,
    fontWeight: "bold",
    color: "purple",
  },
  recipeTitleModal: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
  recipeCategory: {
    color: "brown",
    marginLeft: 10,
  },
  image: {
    // width: 300,
    // height: 150,
    height: 150,
    flex: 1,
    width: null,
    resizeMode: "cover",
    margin: 8,
  },
  bg: {
    backgroundColor: "purple",
    flex: 1,
  },
  smallText: {
    color: "white",
  },
});
