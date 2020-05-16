import React, {Component} from 'react'
import {StyleSheet, ImageBackground, Button, Text, View} from 'react-native'

class Orders extends Component {

  constructor(props){
    super(props);
    this.state = {
      order: 'Hamburguesa',
      price: 120,
      status: false,
      deliver: 'Joshep'
    }
  }
    
  render(){

    let {order} = this.state
    let {price} = this.state
 
    return (

      <ImageBackground 
        source={require('../../../assets/back1.jpg')} style={styles.container}>
      <View style={styles.list}>
        <Text style={styles.register}>Lista ordenes</Text>
        <Text >Orden de: {order} por ${price} | Estado : {this.state.status == false ? 'PENDIENTE' : 'FINALIZADO' }</Text>
        <Text >Orden de: {order} por ${price} | Estado : {this.state.status == false ? 'PENDIENTE' : 'FINALIZADO' }</Text>
        <Text >Orden de: {order} por ${price} | Estado : {this.state.status == false ? 'PENDIENTE' : 'FINALIZADO' }</Text>
        
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
  list: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  register: {
    
  }
});

export default Orders