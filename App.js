import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import db from "./Core/Config";

export default function App() {
  //make a crud function
  const Create = () => {};
  const Read = () => {};
  const Update = () => {};
  const Delete = () => {};

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
