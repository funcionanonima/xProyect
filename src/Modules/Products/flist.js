import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TextInput, Button } from 'react-native';
import Constants from 'expo-constants';

import Modal from '../common/modal'

function Item({ name, price }) {
  let quant
  return (
    <View style={styles.item}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>${price}</Text>   
        {/* <TextInput style={styles.qinput} keyboardType={'numeric'} /> */}
        {/* <Button title="Comprar"/> */}
      <Modal style={styles.modal} 
              customer= {'user'}
              name={name}
              price={price}
      />   
    </View>
  );
}

export default function App({data}) {
    const DATA = data
    console.log(DATA)
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => 
          <Item name={item.name}
                price={item.price}
        />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    fontSize: 16,
    borderRadius: 10,
  },
  name: {
    flex:5,    
  },
  price: {
    flex: 2,
  },
  qinput: {
    borderColor:"#fff", 
    justifyContent: 'flex-end',
    backgroundColor: 'white'
  } 
});
