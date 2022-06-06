import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, TextInput, Button, SafeAreaView } from 'react-native';

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
      .then(id => alert("Receita cadastrada com sucesso!"))
      .catch(err => console.log(err));

    Recipes.all()
      .then(recipe => console.log(recipe))
      .catch(err => console.log(err));

    handleSuccess();
  };


  return (

    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <Image
        style={styles.logo}
        source={require('../../assets/images/logo.png')}
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
          <Button title={"Cadastrar"} onPress={() =>
            create()}
          />
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#AFAFAF",
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: "contain",
  },
  input: {
    backgroundColor: "white",
    borderColor: "lightgrey",
    borderWidth: 2,
    borderRadius: 5,
    borderBottomColor: "lightgrey",
    width: "90%",
    margin: 10,
    padding: 20,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 20,
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
  }
});
