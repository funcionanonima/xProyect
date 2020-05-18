import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, ActivityIndicator  } from 'react-native';
import Constants from 'expo-constants';

function Orders({ customer, product, quantity, price }) {
  return (
    <View style={styles.item}>
        <Text style={styles.title}>Señor@: {customer}, </Text>
        <Text style={styles.title}>pedido: {product}</Text>
        <Text style={styles.title}>Total: {price}</Text>      
    </View>
  );
}

export default function App({data}) {
  const DATA = data
  return data ? (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => 
            <Orders product={item.product}
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
