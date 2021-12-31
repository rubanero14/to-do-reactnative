
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Edit({navigation}) {

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [place, setPlace] = useState('')

  useEffect(()=>{
    setName(navigation.getParam('item').name)
    setPlace(navigation.getParam('item').place)
    setDescription(navigation.getParam('item').description)
  },[])

  const saveItem = async() => {
    // 1. Load all the items from the AsyncStorage
    // 2. Find the one that is the same
    // 3. Change the value with the edited value
    const value = await AsyncStorage.getItem('@todos')
    if(value !== null){
        let todos = JSON.parse(value)
        for(var i = 0; i < todos.length; i++){
            if(todos[i].id === navigation.getParam('item').id){
                todos[i].name = name
                todos[i].place = place
                todos[i].description = description
                break;
            }
        }
        await AsyncStorage.setItem('@todos', JSON.stringify(todos))
        navigation.pop()
    }
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Edit the Item</Text>
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
        <Text style={styles.button}>Edit Item</Text>
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
