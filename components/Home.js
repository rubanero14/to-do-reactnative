
import React from 'react';  
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import ListItem from "./ListItem";

export default function Home({navigation}) {
  const todos = [
    {
        "id": "1",  
        "name": "Eternals",
        "place": "Netflix",
        "description": "Movie time"
    },
      {   
        "id": "2",  
        "name": "Invasion",
        "place": "Flixtor",
        "description": "Movie time"
    },
    {   
        "id": "3",  
        "name": "Coding",
        "place": "Teams",
        "description": "Building time"
    },
  ];
  const renderItem = ({item}) => (
      <TouchableOpacity onPress={()=> navigation.push('Detail', {'item':item})}>
      <ListItem name={item.name} place={item.place}/>
      </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <FlatList data={todos} renderItem={renderItem} keyExtractor={item => item.id}/>
      <TouchableOpacity onPress={()=>navigation.push('Add')}>
        <Text style={styles.button}>Go To Add Page</Text>
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
    padding: 100
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    color: 'white',
    width: 250,
    textAlign: 'center',
  },
});
