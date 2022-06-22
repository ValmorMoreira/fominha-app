import { Button, Pressable, StyleSheet, TextInput, View } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import { useState } from "react";

export default function SearchBox({ onSearch }) {
  const [searchString, setSearchString] = useState("");

  const handleSearch = () => {
    if (onSearch) onSearch(searchString);
  };

  return (
    <View style={styles.searchbar}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder={"Buscar por nome"}
          value={searchString}
          onChangeText={setSearchString}
        />
        <Pressable onPress={handleSearch}>
          <Feather name="search" size={25} color="black" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 0,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
  },
  input: {
    fontSize: 18,
    marginLeft: 10,
    width: "90%",
  },
  searchbar: {
    marginBottom: 5,
    padding: 10,
    flexDirection: "row",
    width: "80%",
    backgroundColor: "white",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
    marginLeft: 35,
  },
});
