import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, ActivityIndicator  } from 'react-native';
import Constants from 'expo-constants';

function Orders({ customer, name, price, deliver, status }) {
  return (
    <View style={styles.item}>
        <Text style={styles.title}>Señor@: {customer}, </Text>
        <Text style={styles.title}>pedido: {name}</Text>
        <Text style={styles.title}>Total: {price}</Text>  
        <Text style={styles.title}>Encargado: {deliver}</Text>     
    </View>
  );
}

export default function App({data}) {
  const DATA = data
  console.log(DATA)
  return data ? (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => 
            <Orders name={item.name}
                customer = {item.customer}
                deliver = {item.deliver}
                price = {item.price}
                status = {item.status}
            /> 
        }
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  ) : <ActivityIndicator style={{flex:1}} animating size='large'/>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    marginTop: Constants.statusBarHeight,
  },
  item: {
    alignItems: 'center',
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 14,
  },
});
