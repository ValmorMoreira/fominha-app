import { View, Modal, StyleSheet} from "react-native";
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
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0.5,0.5,0.5,0.5)",
  },
  content: {
    width: "80%",
    height: "80%",
    margin: 8,
    padding: 8,
    backgroundColor: "white",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-around",
  },
});
