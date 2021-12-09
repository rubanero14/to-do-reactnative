
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export default function Add({navigation}) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [place, setPlace] = useState('')
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Add New Item</Text>
      <TextInput style={styles.input}
      onChangeText={(text)=> setName(text)}
      value={name}
      placeholder="Enter Name.."
      />
      <TextInput style={styles.input}
      onChangeText={(text)=> setPlace(text)}
      value={place}
      placeholder="Enter Place.."
      />
      <TextInput style={styles.input}
      onChangeText={(text)=> setDescription(text)}
      value={description}
      placeholder="Enter Description.."
      />
      <TouchableOpacity onPress={()=>navigation.push('Add')}>
        <Text style={styles.button}>Add Item</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.pop()}>
        <Text style={styles.button}>Go back..</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    color: 'black',
    width: 250,
    textAlign: 'center',
    marginBottom: 10
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    color: 'white',
    width: 250,
    textAlign: 'center',
    marginBottom: 10
  },
  text: {
    marginBottom: 10,
    fontSize: 20
  }
});
