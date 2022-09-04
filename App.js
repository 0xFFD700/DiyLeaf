import React from "react";
import ColorPicker from "react-native-wheel-color-picker";
import { StyleSheet, Text, View, Alert, TouchableOpacity } from "react-native";
import Icons from 'react-native-vector-icons/FontAwesome5';
import axios from "axios";
import hexRgb from 'hex-rgb';

export default function App() {
  const onOffButton = () => {
    axios.get('http://10.30.145.162/off', {
  })
      .then(function (response) {
          console.log(response);
      })
      .catch(function (error) {
          console.log(error);
      })
  };

  const colorButton = () => {
    axios.get('http://10.30.145.162/fire?r=200&g=10&b=10', {
  })
      .then(function (response) {
          console.log(response);
      })
      .catch(function (error) {
          console.log(error);
      })
      .then(function () {
          // always executed
      });  
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
        <ColorPicker 
          onColorChangeComplete={color => axios.get('http://10.30.145.162/color?r=' + hexRgb(color).red + '&g=' + hexRgb(color).green + '&b=' + hexRgb(color).blue, {
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })}
        />
      </View>

      <View style={styles.appWrapper}>
        <Text style={styles.fireTitle}>Fire</Text>
        <View style={styles.fire}>
          <TouchableOpacity
            onPress={() => axios.get('http://10.30.145.162/fire?fireColor=red', {
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })}
            style={styles.buttonRed}
          ></TouchableOpacity>

          <TouchableOpacity
            onPress={() => axios.get('http://10.30.145.162/fire?fireColor=green', {
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })}
            style={styles.buttonGreen}
          ></TouchableOpacity>

          <TouchableOpacity
            onPress={() => axios.get('http://10.30.145.162/fire?fireColor=blue', {
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })}
            style={styles.buttonBlue}
          ></TouchableOpacity>

          <TouchableOpacity
            onPress={() => axios.get('http://10.30.145.162/fire?fireColor=lilac', {
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })}
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
    backgroundColor: "#FFFFFF",
    paddingTop: "15%",
  },
  appWrapper: {
    marginTop: "90%",
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
