import React, {useState} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TextInput, Button, ActivityIndicator } from 'react-native';
import Constants from 'expo-constants';

import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import Modal from './detailsPreOrder'

function Item({ name, price}) {  

  const delivers = [
    "BikerDeliver", 
    "CarDeiver", 
    "TruckDeliver",
  ];
  const users = [
    "George", 
    "Lia", 
    "Brandon",
    "Charles"
  ];
  const statuses = [
    false,
    true
  ];

  const customer = users[Math.floor(Math.random() * users.length)];
  const deliver = delivers[Math.floor(Math.random() * delivers.length)];
  const status = statuses[Math.floor(Math.random() * statuses.length)];

  return name ? (    
    <View style={styles.item}>
      <MaterialCommunityIcons style={styles.icon} name="food" size={60} color="white" />
      <View style={styles.prod}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>${price}</Text> 
      </View>   
        <Modal style={styles.modal} 
            name={name}
            price={price}
            customer={customer}
            deliver={deliver}
            status={status}
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
    flex: 3,
    marginTop: Constants.statusBarHeight,
    paddingBottom:20,
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#ff9933',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,  
  },
  icon: {
    flex: 3
  },
  prod: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'column',
    flex: 6
  },
  name: {
    fontSize: 16,
    color: 'white',
    flex:1,    
  },
  price: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    flex: 2,
  },
});
