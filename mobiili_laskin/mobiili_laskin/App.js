import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';

export default function App() {

  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0);

  const sum = () => {
    setResult(parseInt(number) + parseInt(number2));
  }
  const minus = () => {
    setResult(number - number2);

  }


  return (
    <View style={styles.container}>
      <View style={styles.resultField}>
        <Text>Result: </Text>
        <Text>{result}</Text>
      </View>
      <View style={styles.inputFields}>
        <Text>Number 1:</Text>
        <TextInput style={styles.numField} keyboardType={'numeric'} onChangeText={text => setNumber(text)} value={number} />
      </View>
      <View style={styles.inputFields}>
        <Text>Number 2:</Text>
        <TextInput style={styles.numField} keyboardType={'numeric'} onChangeText={text => setNumber2(text)} value={number2} />
      </View>
      <View>
        <View style={styles.buttonsStyle}>
          <Button title='+' onPress={sum} /> 
          <Button title='-' onPress={minus} />
        </View>
      </View>


    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 100,
    fontSize: 25,
  },

  numField: {
    flexDirection: 'row',
    width: 100,
    marginLeft: 10
  },

  resultField: {
    flexDirection: 'row'
  },

  buttonsStyle: {
    flexDirection: 'row',
    margin: 30,
  },

  inputFields: {
    flexDirection: 'row',
    margin: 10
  }



});