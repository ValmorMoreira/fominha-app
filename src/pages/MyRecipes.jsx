import React, { useEffect, useState, useContext } from "react";
import i18n from "../services/lang";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Button,
} from "react-native";

import { ModalContext } from "../components/AppModal";
import SearchBox from "../components/SearchBox";
import Recipes from "../services/sqlite/Recipes";

export default function MyRecipes({ navigation }) {

  const appModal = useContext(ModalContext);

  const [recipesList, setRecipesList] = useState([]);

  const refreshRecipesList = () => {
    let query = Recipes.all();
    query
      .then((result) => {
        setRecipesList(result);
      })
      .catch((error) => {
        alert("Ocorreu um erro ao buscar os items " + "Debug mode: " + error);
      });
  };

  // com Promises
  useEffect(() => {
    //refreshRecipesList();
    const refresh = navigation.addListener('focus', () => {
      refreshRecipesList();
    });
    return refresh;
  }, []);

  const handleSuccessDelete = () => {
    appModal.hide();
    navigation.navigate("Minhas receitas");
  };

  const handleRecipeEdit = (obj) => {
    appModal.hide();
    navigation.navigate("Editar Receita", { recipeData: obj });
  };

  const onSearch = (searchString) => {
    let query = Recipes.findByName(searchString);
    query
      .then((result) => {
        setRecipesList(result);
      })
      .catch((error) => {
        console.log(error);
        alert(`${i18n.t("searchError")} ${searchString}`);
      });
  };

  const onDelete = (id) => {
    Recipes.remove(id)
      .then((id) => {
        alert(`${i18n.t("deleteRecipe")}`);
        refreshRecipesList();
      })
      .catch((error) => {
        console.log(error);
        alert(`${i18n.t("searchError")} ${id}!`);
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
              {i18n.t("category")} - {item.category}
            </Text>
          </View>
          <Image
            style={styles.image}
            source={item.image ? { uri: item.image } : require("../../assets/images/default.jpg")}
          />
          <Text style={styles.smallText}> {i18n.t("clickDetails")}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const handleModal = (item) => {
    appModal.show(
      <ScrollView>
   
          <Text style={styles.recipeTitle}>{item.name}</Text>
          <View style={styles.imageLimit}>
            <Image
              style={styles.image}
              source={item.image ? { uri: item.image } : require("../../assets/images/default.jpg")}
            />
          </View>
          <View>
            <Text style={styles.recipeIngredientsAndPrepare}>{i18n.t("ingredients")}</Text>
            <Text>{item.ingredients}</Text>
            <Text style={styles.recipeIngredientsAndPrepare}>{i18n.t("prepareMode")}</Text>
            <Text>{item.preparemode}</Text>
          </View>
          <View style={styles.btnContainer}>
            <View style={styles.buttons}>
              <Button title={i18n.t("edit")} onPress={() => handleRecipeEdit(item)} />
            </View>
            <View style={styles.buttons}>
              <Button
                color={"red"}
                title={i18n.t("delete")}
                onPress={() => onDelete(item.id)}
              />
            </View>
            <View style={styles.buttons}>
              <Button
                color={"green"}
                title={i18n.t("back")}
                onPress={() => appModal.hide()}
              />
            </View>
          </View>
  
      </ScrollView>


    );
  };

  if (recipesList == 0) {
    return (
      <View style={styles.bg}>
        <Text style={styles.nothing}> {i18n.t("noRecipesFound")} </Text>
      </View>
    )
  }
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
  imageLimit: {
   
  },
  bg: {
    backgroundColor: "purple",
    flex: 1,
  },
  smallText: {
    color: "purple",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 25,
  },
  buttons: {
    width: "30%",
  },
  nothing: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    marginTop: "70%",
  }
});
