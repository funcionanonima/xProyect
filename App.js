import React, {Component} from 'react';
import { StyleSheet, ImageBackground } from 'react-native';

// importamos contenedores
import Header from './src/containers/header'
import Body from './src/containers/body'

// se crea componenete principal
class xProject extends Component {

  render(){
    return (

      // Contenedor ppal
      <ImageBackground 
        source={require('./assets/back1.jpg')} style={styles.container}>
        {/* Contenedor de botones d enavegacion */}
        <Header />
        {/* Contenedor para secciones del body */}
        <Body />   
    </ImageBackground>    

    );
  }
}

const styles = StyleSheet.create({  
  container: {
    flex: 1,
    marginTop: 30,
    flexDirection:'column',
  },
});

export default xProject;
