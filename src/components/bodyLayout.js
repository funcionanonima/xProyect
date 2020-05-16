import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

// importamos componentes
import Map from './Home/Map/mapLayout'
import Products from './Home/Products/productsLayout'

function Body(){
    return(
        <View style={styles.body}>
        {/* Seccion para Mapa */}
        <Map />
        {/* Seccion para Ordenes */}
        <Products /> 
      </View> 
    )
}

const styles = StyleSheet.create({  
  body: {
    flex: 1,
    flexDirection: 'column',
  },  
});

export default Body