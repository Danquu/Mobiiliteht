import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {

  const [guess, setGuess] = useState('')
  const [text, setText] = useState("Guess a number between 1-100");

  const [random, setRandom] = useState(() => {
    return Math.floor(Math.random() * 100 ) + 1;
  });

  var [tries, setTries] = useState(() => {
    return 1
  });
 
  const tryGuess = () => {
    if(parseInt(guess) == random ){
      Alert.alert("You guessed the number in " + tries + " guesses");
      setRandom(Math.floor(Math.random() * 100 ) + 1);
      setTries(1)
      setText("Guess a number between 1-100")
      setGuess('');
    }
    else if (parseInt(guess) < random){
      setText("Your guess "+ guess + " was too low");
      setTries(prevTries => prevTries + 1)
      setGuess('');
    }
    else if (parseInt(guess) > random){
      setText("Your guess "+ guess + " was too high");
      setTries(prevTries => prevTries + 1)
      setGuess('');
    }
    
  }

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <TextInput style={styles.inputField} keyboardType ={'numeric'} onChangeText={text => setGuess(text)} value = {guess}/>
      <Button title='Take a guess' onPress={tryGuess} /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputField: {
    width: 25,
    height: 20,
    borderWidth: 1,
    borderStyle: 'solid',
    marginBottom:10,
    marginTop: 10
  }
});