import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, Text, View, TextInput, Button, ScrollView } from 'react-native';
import i18n from '../services/lang';
import Recipes from '../services/sqlite/Recipes';
import ImageStorage from '../services/ImageStorage';

export default function RecipeRegister({ navigation }) {

  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [preparemode, setPrepareMode] = useState('');
  const [image, setImage] = useState(null);

  const filename = "image1.base64";

  useEffect(() => {
    initializeAsync();
  }, []);

  const initializeAsync = async () => {
    const loadedImage = await ImageStorage.loadImageAsync(filename);
    if (loadedImage) setImage(loadedImage);
  };

  const handleSuccess = () => {
    navigation.navigate("Minhas receitas");
  };

  const handleValidRecipe = () => {
    if (name != "" && category != "" && ingredients != "" && preparemode != "") {
      create();
      handleDelete();
    }
    else {
      alert(`${i18n.t("fields")}`);
    }
  };

  const create = () => {
    Recipes.create({ name: name, category: category, ingredients: ingredients, preparemode: preparemode, image: image })
      .then(id => alert(`${i18n.t("successRecipe")}`))
      .catch(err => console.log(err));

    Recipes.all()
      .then(recipe => console.log(recipe))
      .catch(err => console.log(err));

    handleSuccess();
  };

  const handleMediaLibrary = async () => {
    const storedImage = await ImageStorage.storeImageAsync(filename, false);
    if (storedImage) setImage(storedImage);
  };

  const handleDelete = async () => {
    await ImageStorage.deleteImageAsync(filename);
    setImage(null);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Image
        style={styles.logo}
        source={require('../../assets/images/logo-fominha.png')}
      />

      <Text style={styles.text}>{i18n.t("fillRecipeData")}</Text>
      <TextInput
        style={styles.input} placeholder={`${i18n.t("recipeName")}`} onChangeText={setName} value={name}
      />

      <TextInput
        style={styles.input} placeholder={`${i18n.t("category")}`} onChangeText={setCategory} value={category}
      />

      <TextInput
        style={styles.input} multiline={true} numberOfLines={3} placeholder={`${i18n.t("ingredients")}`} onChangeText={setIngredients} value={ingredients}
      />

      <TextInput
        style={styles.input} multiline={true} numberOfLines={3} placeholder={`${i18n.t("prepareMode")}`} onChangeText={setPrepareMode} value={preparemode}
      />
      
      <View  style={styles.image}>
        
       { <Image     
          //coloquei uma nega????o para aparecer a op????o do else    
          source={ image ? { uri: image } : require("../../assets/images/default.jpg")}
          style={{ width: 250, height: 250, marginLeft:"10%" }} />}
      </View>

      <View style={styles.btn}>
        <View>
          <Button
            title={i18n.t("pickPhoto")}
            onPress={handleMediaLibrary}
          />
        </View>

        <View>
          <Button title={`${i18n.t("btnRegister")}`} color={"green"} onPress={() =>
            handleValidRecipe()}
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
    alignContent: "center",
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
  btn: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    margin: 10,
  },
  image:{
    flex:1,
    alignContent:"center",
    margin: 10,
    marginLeft:40,
    resizeMode:"contain",
  }
});
