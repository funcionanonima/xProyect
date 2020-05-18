import React, {useState} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TextInput, Button, ActivityIndicator } from 'react-native';
import Constants from 'expo-constants';

import Modal from './modal'

function Item({ name, price}) {  

  return name ? (    
    <View style={styles.item}>
      <Text style={styles.name}>{name}</Text>
      {/* <Button  title="Apretame" /> */}
      <Text style={styles.price}>${price}</Text>   
        {/* <TextInput style={styles.qinput} keyboardType={'numeric'} /> */}
        {/* <Button title="Comprar"/> */}
      <Modal style={styles.modal} 
          name={name}
          price={price}
      />   
    </View>
  ): <ActivityIndicator style={{flex:1}} animating size='large'/>;
}

export default function App({data}) {
    const DATA = data
    // console.log(DATA)
  return data ? (
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
  ): <ActivityIndicator style={{flex:1}} animating size='large'/>;
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
