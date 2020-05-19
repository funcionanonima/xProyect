import React, { Component, useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";

import { db } from '../../App/services/config'

const App = ({name, price}) => {  

  const customer = 'usuario'
  const deliver = 'PedroLleva'
  const status = false

  // data = state , setData = setState
  const[order, setOrder] = useState({
    name: name,
    price: price,
    customer: customer,
    deliver: deliver,
    status: status, 
  })

  const handleChange = e => {
    setOrder({
      ...order,
      [e.target.name]: e.target.value
    });
  } 

  console.log(order)

  const addOrder = () => {
    db.collection('order')
      .add(order)
  }  

  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
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
            <Text onChange={handleChange} style={styles.modalText}>{customer} | {name} | $ {price}</Text>
            <View style={styles.buttons}>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3", marginHorizontal:10 }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Cancelar</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "green", marginHorizontal:10 }}
              onPress={() => {
                addOrder();
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Confirmar</Text>
            </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.textStyle}>Pedir!</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
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
  buttons: {
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 10,
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
  }
});

export default App;