import React, { useState } from 'react';
import i18n from "../services/lang";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  ScrollView
} from 'react-native';

import Recipes from '../services/sqlite/Recipes';


export default function RecipeEdit({ route, navigation  }) {

  const { recipeData } = route.params;
  
  const [name, setName] = useState(recipeData.name);
  const [category, setCategory] = useState(recipeData.category);
  const [ingredients, setIngredients] = useState(recipeData.ingredients);
  const [preparemode, setPrepareMode] = useState(recipeData.preparemode);
  const [image, setImage] = useState('');

  const handleSuccess = () => {
    navigation.navigate("Minhas receitas");
  };

  const updateRecipe = (id) => {

    Recipes.update(id, {name: name, category: category, ingredients: ingredients, preparemode: preparemode})
      .then(id => alert(`${i18n.t("editedRecipe")}`))
      .catch(err => console.log(err));

    Recipes.all()
      .then(recipe => console.log(recipe))
      .catch(err => console.log(err));

     handleSuccess();
  };


  return (

    <ScrollView style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/images/logo-fominha.png')}
      />

      <Text style={styles.text}>{i18n.t("updateRecipeDetails")}</Text>
      <TextInput
        style={styles.input}  onChangeText={setName} defaultValue={name} 
      />

      <TextInput
        style={styles.input}  onChangeText={setCategory} defaultValue={category} 
      />

      <TextInput
        style={styles.input} onChangeText={setIngredients} defaultValue={ingredients}
      />

      <TextInput
        style={styles.input} onChangeText={setPrepareMode} defaultValue={preparemode}
      />

      <View style={styles.btnContainer}>
        <View >
          <Button title={i18n.t("updatePhoto")} onPress={() =>
            console.log("Função para desenvolver..")}
          />
        </View>
        <View>
          <Button color={"green"} title={i18n.t("btnUpdateRecipe")} onPress={() =>
            updateRecipe(recipeData.id)}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "purple",
  },
  logo: {
    width: 200,
    height: 140,
    resizeMode: "contain",
    marginTop: 20,
    marginLeft: 80,
  },
  input: {
    backgroundColor: "white",
    borderColor: "lightgrey",
    borderWidth: 2,
    borderRadius: 50,
    borderBottomColor: "lightgrey",
    width: "90%",
    margin: 10,
    padding: 15,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 40,
    marginBottom: 20,
    color: "lightgrey",
  },
  inline: {
    flexDirection: "row",
    marginTop: 25,
    marginBottom: 15,
    alignContent: "space-around",
    alignItems: "center",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 25,
  }
});

