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
          // console.log(data)
          orders.push(data)
        })
        this.setState({
          orders: orders
        })
      })
      .catch( error => console.log(error))
  }

  render(){

    const {orders} = this.state
 
    return (

      <ImageBackground 
        source={require('../../../assets/back1.jpg')} style={styles.container}>
      <View style={styles.list}>
        <Text style={styles.text}>Ordenes</Text>
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
  list: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Orders