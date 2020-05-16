import React, {Component} from 'react'
import { StyleSheet, ImageBackground, Button } from 'react-native'

// importamos contenedores
import Map from '../Map/map'
import Products from '../Products/products'

class Home extends Component {
    
  render(){
      return (

        // Contenedor ppal
        <ImageBackground 
          source={require('../../../assets/back1.jpg')} style={styles.container}>          
          <Map />
          <Products />
          <Button   
            onPress={() => this.props.navigation.navigate('Orders')}             
            title="Ordenes"
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
});

export default Home