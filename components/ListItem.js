
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ListItem({name, place}) {

  return (
    <View style={styles.item}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.place}>{place}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
    place: {
      fontSize: 16,
    }
  });
