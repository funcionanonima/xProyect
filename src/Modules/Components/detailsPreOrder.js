import React, { useState } from "react";
import { Alert,  Modal,  StyleSheet,  Text,  TouchableHighlight,  View } from "react-native";

import { db } from '../../App/services/config'

import { AntDesign } from '@expo/vector-icons';

const App = ({name, price, customer, deliver, status}) => {  

  const[order, setOrder] = useState({
    product: name,
    total: price,
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

  const addOrder = () => {
    db.collection('order')
      .add(order)
      alert('Su pedio a sido anexado. Gracias')
      console.log(order)
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
        <View onchange={handleChange}style={styles.centeredView}>
          <View style={styles.modalView}>        
            <View style={styles.card} >
              <View style={styles.cardContainer}>
                <View style={styles.iconContainer}>
                  <AntDesign style={styles.icon} name="shoppingcart" size={35} color="black" />
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.text}>{order.customer}</Text>
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.text}>{order.product}</Text>
                </View>
                <View style={styles.textContainer}>
                  <Text style={{...styles.text, color:'red'}}> ${order.total}</Text>
                </View>
              </View>
            </View>
            <View style={styles.buttons}>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#dc3545", marginHorizontal:10 }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Cancelar</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#17a2b8", marginHorizontal:10 }}
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
  card: {
    paddingVertical:20,
  },
  cardContainer: {

  },
  iconContainer: {
    alignItems: 'center',
    padding:15
  },
  textContainer: {
    alignItems: 'center'
  },
  text: {
    justifyContent:'center',
    fontSize: 26
  },
  buttons: {
    margin: 5,
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  openButton: {
    backgroundColor: "#17a2b8",
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
