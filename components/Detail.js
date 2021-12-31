
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useState } from 'react';
import { Alert, Modal, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Detail({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const removeItem = async() => {
    const value = await AsyncStorage.getItem('@todos')
    if(value !== null) {
      let todos = JSON.parse(value)

      // 2. to delete the item
      let deletedArray = todos.filter(val=>{
        return val.id != navigation.getParam('item').id
      })
      await AsyncStorage.setItem('@todos', JSON.stringify(deletedArray))
    }
    // 1. Load the todos from AsyncStorage

    // 2. Using splice or filter, remove the item from the array

    // 3. Save it inside the storage

    // 4. Move back to previous page

    setModalVisible(!modalVisible);
    navigation.pop();
  }
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Are you sure you want to delete this item?</Text>
            <Pressable
              style={[styles.button, styles.buttonOpen]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle} onPress={removeItem}>Yes</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>No</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Text style={styles.buttonText}>{navigation.getParam('item').name}</Text>
      <Text style={styles.buttonText}>{navigation.getParam('item').place}</Text>
      <Text style={styles.buttonText}>{navigation.getParam('item').description}</Text>
      <TouchableOpacity>
        <Text style={styles.buttonText2} onPress={() => navigation.push('Edit', 
        {item: navigation.getParam('item')}
      )}>Edit Item</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.buttonText2} onPress={() => setModalVisible(true)}>Delete Item</Text>
      </TouchableOpacity>
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
  buttonText: {
    backgroundColor: 'pink',
    padding: 10,
    borderRadius: 5,
    color: 'black',
    width: 250,
    textAlign: 'center',
    marginTop: -3,
    marginBottom: -3
  },
  buttonText2: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    color: 'white',
    width: 250,
    textAlign: 'center',
    marginTop: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: 'green',
    marginBottom: 5,
  },
  buttonClose: {
    backgroundColor: 'red',
    marginBottom: 5
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
