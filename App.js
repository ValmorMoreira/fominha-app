import { SafeAreaView, StyleSheet } from "react-native";
import AppModal from "./src/components/AppModal";
import Routes from "./src/Routes";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <AppModal>
        <Routes />
      </AppModal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});



