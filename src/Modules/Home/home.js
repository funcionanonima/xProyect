import React, {Component} from 'react'
import { StyleSheet, ImageBackground, Button, View, Text } from 'react-native'

import Map from '../Map/map'
import Products from '../Products/products'

class Home extends Component {
    
  render(){
      return (

        <View style={styles.container}>
          <Map />
          <Products / >
          <View style={{backgroundColor:'#17a2b8'}}>
          <Button
            onPress={() => this.props.navigation.navigate('Orders')}             
            title="Ordenes"
          />
          </View>
      </View>    
  
      );
  }
}

const styles = StyleSheet.create({  
    container: {
      flex: 1,
      flexDirection:'column',
    },
});

export default Home