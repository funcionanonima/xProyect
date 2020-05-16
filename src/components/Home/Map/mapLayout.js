import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

function Map(){
    return(
        <View style={styles.mapSection}>
          <Text >seccion Mapa</Text>
        </View>
    )
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