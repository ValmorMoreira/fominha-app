import { View, Modal, StyleSheet, ScrollView } from "react-native";
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
        propagateSwipe={true}    
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          // this callback runs when device "back" button is pressed
          setModalVisible(!modalVisible);
        }}>
        <ScrollView >
          <View style={styles.modalPosition}>
          <View style={styles.container}>
            <View style={styles.content} >
              {modalContent}
            </View>
          </View>
          </View>
          
        </ScrollView>
      </Modal>
      {children}
    </ModalContext.Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
    backgroundColor: "grey",
    borderRadius: 10,
    padding: 12,
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
    height: 500,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
  },
  modalPosition:{
    flex:1,
    marginTop:"30%",
  }
});
