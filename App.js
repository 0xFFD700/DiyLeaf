import React from "react";
import ColorPicker from "react-native-wheel-color-picker";
import { StyleSheet, Text, View, Alert, TouchableOpacity } from "react-native";
import Icons from 'react-native-vector-icons/FontAwesome5';

export default function App() {
  const onOffButton = () => {
    Alert.alert("Simple Button pressed");
  };

  const colorButton = () => {
    Alert.alert("Simple Button pressed");
  };

  const fireButton = () => {
    Alert.alert("Simple Button pressed");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.appTitle}>DIYLEAF</Text>

        <TouchableOpacity onPress={onOffButton} style={styles.buttonOnOff}>
        <Icons name='power-off' color='white' size={25} />
        </TouchableOpacity>
      </View>

      <View style={styles.colorPicker}>
        <ColorPicker />
      </View>

      <View style={styles.appWrapper}>
        <Text style={styles.fireTitle}>Fire</Text>
        <View style={styles.fire}>
          <TouchableOpacity
            onPress={fireButton}
            style={styles.buttonRed}
          ></TouchableOpacity>

          <TouchableOpacity
            onPress={fireButton}
            style={styles.buttonGreen}
          ></TouchableOpacity>

          <TouchableOpacity
            onPress={fireButton}
            style={styles.buttonBlue}
          ></TouchableOpacity>

          <TouchableOpacity
            onPress={fireButton}
            style={styles.buttonLiliac}
          ></TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
    paddingTop: "15%",
  },
  appWrapper: {
    marginTop: "90%",
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: "7%",
    marginRight: "7%",
  },
  appTitle: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  fireTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  fire: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonOnOff: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: "#000000",
    color: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonRed: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: "#FF0000",
  },
  buttonGreen: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: "#00FF00",
  },
  buttonBlue: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: "#0000FF",
  },
  buttonLiliac: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: "#FF00FF",
  },
  colorPicker: {
    padding: "10%",
  },
});
