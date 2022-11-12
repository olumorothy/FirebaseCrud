import { doc, getDoc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import { db } from "./Core/Config";

export default function App() {
  const [userData, setUserData] = useState("");
  const myDoc = doc(db, "Users", "data");
  //make a crud function
  const Create = () => {
    const Data = {
      firstname: "Moroti",
      lastname: "Sonde",
    };
    setDoc(myDoc, Data)
      .then(() => {
        Alert.alert("Success", "Record created succesfully", [
          { text: "Close" },
        ]);
      })
      .catch((error) => {
        Alert.alert("Error", error.message, [{ text: "Close" }]);
      });
  };
  const Read = () => {
    getDoc(myDoc)
      .then((snapshot) => {
        if (snapshot.exists) {
          setUserData(snapshot.data());
          //set the user
        } else {
          alert("No record Found!");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const Update = () => {};
  const Delete = () => {};

  return (
    <View style={styles.container}>
      <Button title="Create New Doc" onPress={Create} />
      <Button title="Read data" onPress={Read} />
      {userData && <Text style={styles.title}>Info:{userData.lastname}</Text>}
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
  title: {
    padding: 10,
  },
});
