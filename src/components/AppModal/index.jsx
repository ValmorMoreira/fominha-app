import { View, Modal, StyleSheet, Image} from "react-native";
import React, { useState, createContext } from "react";

export const ModalContext = createContext();

export default function AppModal({ children }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const appModal = {
    show: (content) => {
      setModalContent(content);
      setModalVisible(true);
    },
    hide: () => setModalVisible(false),
  };

  return (
    <ModalContext.Provider value={appModal}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          // this callback runs when device "back" button is pressed
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.container}>
          <View style={styles.content}>{modalContent}</View>
        </View>
      </Modal>

      {children}
    </ModalContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    backgroundColor: "purple",
    borderRadius: 5,
    padding:5,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  content: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-around",
  },
  recipeName:{
    fontSize:25,
    fontWeight: "bold",
    color:"purple",
  },
  image:{
    width: 150,
    height: 150,
    resizeMode: "contain",
  }

});
