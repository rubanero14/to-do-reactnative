
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Add({navigation}) {

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [place, setPlace] = useState('')

  const saveItem = async() => {

    // It will load the item in the asyncstorage
    const value = await AsyncStorage.getItem('@todos')

    // If there is an existing item, it will add it to the end and save the item
    if(value !== null) {
      //Get the existing item
      let itemsArray = JSON.parse(value)
      let currentID = itemsArray[itemsArray.length - 1].id + 1
      let newItem = {
        id: currentID,
        name: name,
        place: place,
        description: description
       }
       itemsArray.push(newItem)
       await AsyncStorage.setItem('@todos', JSON.stringify(itemsArray))

    } else {

    //If there is no item saved previously, it will create a new array and add the item at the end and then save it
    let newArray = []
    let newItem = {
      id: 1,
      name: name,
      place: place,
      description: description
     }
     newArray.push(newItem)
     await AsyncStorage.setItem('@todos', JSON.stringify(newArray))
    }
    navigation.pop()
  }

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
      <TouchableOpacity onPress={saveItem}>
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
