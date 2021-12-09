
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Detail({navigation}) {

  return (
    <View style={styles.container}>
      <Text>Detail Page</Text>
      <Text>{navigation.getParam('item').name}</Text>
      <Text>{navigation.getParam('item').place}</Text>
      <Text>{navigation.getParam('item').description}</Text>
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
});
