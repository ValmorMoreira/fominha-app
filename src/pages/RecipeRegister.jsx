import React, { useState } from 'react';
import { StyleSheet, Image, Text, View, TextInput, Button, ScrollView } from 'react-native';

import Recipes from '../services/sqlite/Recipes';
import ImagePickerCustom from '../components/ImagePicker'


export default function RecipeRegister({ navigation }) {

  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [preparemode, setPrepareMode] = useState('');
  //const [image, setImage] = useState(null);

  const handleSuccess = () => {
    navigation.navigate("Minhas receitas");
  };

  const create = () => {
    Recipes.create({ name: name, category: category, ingredients: ingredients, preparemode: preparemode })
      .then(id => alert("Receita " + id + " cadastrada com sucesso!"))
      .catch(err => console.log(err));

    Recipes.all()
      .then(recipe => console.log(recipe))
      .catch(err => console.log(err));

    handleSuccess();
  };


  return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Image
          style={styles.logo}
          source={require('../../assets/images/logo-fominha.png')}
        />

        <Text style={styles.text}>Prencha os dados da receita</Text>
        <TextInput
          style={styles.input} placeholder={'Nome da receita'} onChangeText={setName} value={name}
        />

        <TextInput
          style={styles.input} placeholder={'Categoria'} onChangeText={setCategory} value={category}
        />

        <TextInput
          style={styles.input} placeholder={'Ingredientes'} onChangeText={setIngredients} value={ingredients}
        />

        <TextInput
          style={styles.input} placeholder={'Modo de preparo'} onChangeText={setPrepareMode} value={preparemode}
        />

        <View style={styles.btn}>
          <View >
            <ImagePickerCustom />
          </View>
          <View>
            <Text>    </Text>
          </View>
          <View>
            <Button title={"Cadastrar"} color={"green"} onPress={() =>
              create()}
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
    marginTop:20,
    marginLeft:80,
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
    marginLeft:50,
  }
});
