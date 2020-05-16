import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'

class Map extends Component {
    
    render(){
        return(
            <View style={styles.mapSection}>
              <Text >seccion Mapa</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({  
    mapSection: {
      flex: 1,
      // backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Map