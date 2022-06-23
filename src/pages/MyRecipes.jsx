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

export default function MyRecipes({ navigation }) {

  const appModal = useContext(ModalContext);

  const [recipesList, setRecipesList] = useState([]);

  

  const handleSuccessDelete = () => {
    appModal.hide();
    navigation.navigate("Minhas receitas");
  };

  const handleRecipeEdit = () => {
    appModal.hide();
    navigation.navigate("Editar Receita");
  };

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

  const onDelete = (id) => {
    Recipes.remove(id)
      .then(id => alert("Receita " + id + " deletada com sucesso!"))
      .catch((error) => {
        console.log(error);
        alert(`Nenhum registro encontrado para ${id}!`);
      });
      handleSuccessDelete();
  };


  const Recipe = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => handleModal(item)}>
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

  const handleModal = (item) => {

    appModal.show(
      <View style={styles.modal}>
        <Text style={styles.recipeTitle}>{item.name}</Text>
        <View style={styles.imageLimit}>
        <Image
          style={styles.image}
          source={require("../../assets/images/default.jpg")}
        />
        </View>        
        <View>
          <Text style={styles.recipeIngredientsAndPrepare}>Ingredientes</Text>
          <Text>
            {item.ingredients}
          </Text>
          <Text style={styles.recipeIngredientsAndPrepare}>
            Modo de Preparo
          </Text>
          <Text>
            {item.preparemode}
          </Text>
        </View>
        <View style={styles.btnContainer}>
          <View style={styles.buttons}>
            <Button  title="Editar" onPress={() => 
              handleRecipeEdit()} />
          </View>
          <View style={styles.buttons}>
            <Button color={"red"} title="Deletar" onPress={() => 
              onDelete(item.id)} />
          </View>
          <View style={styles.buttons}>
            <Button color={"green"} title="Voltar" onPress={() => appModal.hide()} />
          </View>

        </View>

      </View>
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
    height: 150,
    flex: 1,
    width: null,
    resizeMode: "cover",
    margin: 8,
  },
  imageLimit:{
    height:"60%",
  },
  bg: {
    backgroundColor: "purple",
    flex: 1,
  },
  smallText: {
    color: "white",
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 25,
  },
  buttons: {
    width: "30%",
  }
});
