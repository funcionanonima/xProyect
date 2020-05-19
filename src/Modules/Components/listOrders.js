import React, {useState} from 'react';
import { TouchableHighlight, Modal, SafeAreaView, View, FlatList, StyleSheet, Text, ActivityIndicator, Button  } from 'react-native';
import Constants from 'expo-constants';

import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons'; 

function Orders({ customer, product, total, deliver, status }) {

  const [modalVisible, setModalVisible] = useState(false);
  const color = status ? "#28a745" : "#ff9933"

  return (

    <View style={{...styles.item, backgroundColor:color}}>
      <View style={styles.titleContainer}> 
        <View style={styles.textContainer}>
          <Text style={styles.title}>{customer} </Text>
          <Text style={styles.title}>{product}</Text>
        </View>
        <View style={styles.iconContainer}>
          <View style={styles.icon}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <View style={styles.card} >
                    <View style={styles.cardContainer}>
                      <View style={styles.userContainer}>
                        <Text style={styles.text}>{customer}</Text>
                      </View>
                      <View style={styles.infoContainer}>
                        <Text style={styles.text}>{product}</Text>
                        <Text style={styles.text}> Total: $ {total}</Text>
                        <Text style={styles.text}> Repartidor: {deliver}</Text>
                        <Text style={styles.text}> Estado: {status ? 'Entregado' : 'En Camino'}</Text>
                      </View>
                    </View>
                  </View>

                  <TouchableHighlight
                    style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                    onPress={() => {
                      setModalVisible(!modalVisible);
                    }}
                  >
                    <Text style={styles.textStyle}>Cerrar</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </Modal>

            <TouchableHighlight
              style={styles.icon}
              onPress={() => {
                setModalVisible(true);
              }}
            >
              <AntDesign name="infocirlceo" size={24} color="black" />
            </TouchableHighlight>
          </View>   
        </View> 
      </View>
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
                total = {item.total}
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
    marginBottom:20
  },
  item: {
    flex: 1,
    borderRadius:20,
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 20,
  },
  titleContainer: {
    flexDirection:'row',    
  },  
  iconContainer: {    
    flex: 1,
    justifyContent: 'center',
    alignItems:'flex-end'
  },
  textContainer:{
  },
  title: {
    flex:1,
    fontSize: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  card: {
    paddingVertical:20,
  },
  cardContainer: {

  },
  userContainer: {
    alignItems: 'center'
  },
  infoContainer:{
    alignItems: 'center',
    flexDirection: 'column'
  },
  text: {
    fontSize: 18
  },
});
