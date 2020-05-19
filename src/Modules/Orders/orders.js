import React, {Component} from 'react'
import {StyleSheet, ImageBackground, Button, Text, View} from 'react-native'

import FList from '../Components/listOrders'

import { db } from '../../App/services/config'

class Orders extends Component {

  constructor(props){
    super(props);

    this.state = {
      orders: null
    }
  }

  componentDidMount(){
    db.collection("order")
      .get()
      .then( snapshot => {
        const orders = []
        snapshot.forEach(doc => {
          const data = doc.data()
          orders.push(data)
        })
        this.setState({
          orders: orders
        })
        console.log(orders)
      })
      .catch( error => console.log(error))
  }

  render(){

    const {orders} = this.state
 
    return (

      <ImageBackground 
        source={require('../../../assets/back1.jpg')} style={styles.container}>
      <View style={styles.container}>
        <View style={styles.title}>
        <Text style={styles.text}>Ordenes</Text>
        </View>
        <FList style={styles.list}
         data = { orders }/>
      </View>
      <Button   
        onPress={() => this.props.navigation.navigate('HomeS')}             
        title="Productos"
      />
    </ImageBackground>    

    );
  }
}

const styles = StyleSheet.create({  
  container: {
    flex: 1,
    flexDirection:'column',
  },
  text: {
    fontSize: 30,
    marginTop: 20,
    color: 'white'
  },
  title: {
    alignItems:'center'
  },
  list: {
    flex: 1,
  },
});

export default Orders