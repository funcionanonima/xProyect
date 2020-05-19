import React, {Component} from 'react'
import { StyleSheet, ImageBackground, Button, View } from 'react-native'

import Map from '../Map/map'
import Products from '../Products/products'

class Home extends Component {
    
  render(){
      return (

        // Contenedor ppal
        <View style={styles.container}      >
          <Map />
          <Products />
          <Button   
            onPress={() => this.props.navigation.navigate('Orders')}             
            title="Ordenes"
          />
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