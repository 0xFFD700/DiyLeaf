import React from 'react';
import ColorPicker from 'react-native-wheel-color-picker'
import { StyleSheet, Text, View, Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Today's Tasks */}
      <View style={styles.appWrapper}>
        <Text style={styles.appTitle}>DIYLEAF</Text>

        <View style={styles.colorPicker}>
        <ColorPicker/>
        </View>

        <Text style={styles.fireTitle}>Fire</Text>
        <View style={styles.fire}>

        <View style={styles.button}>
        <Button
        title=''
        color="#3052C8"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      </View>

      <View style={styles.button}>
      <Button
        title=''
        color="#2DDAD0"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      </View>  

      <View style={styles.button}>
      <Button
        title=''
        color="#47BE1D"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      </View> 

      <View style={styles.button}>
      <Button
        title=''
        color="#E6D430"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      </View> 

        </View>

        <View style={styles.fire}>

        <View style={styles.button}>
        <Button
        title=''
        color="#FDA726"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      </View>

      <View style={styles.button}>
      <Button
        title=''
        color="#D62E2E"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      </View>  

      <View style={styles.button}>
      <Button
        title=''
        color="#EC16B0"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      </View> 

      <View style={styles.button}>
      <Button
        title=''
        color="#9C1EE9"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      </View> 

        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  appWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  appTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  fireTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  fire: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    width: '20%'
  },
});