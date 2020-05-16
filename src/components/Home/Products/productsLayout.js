import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

function Products(){
    return(
        <View style={styles.productsSection}>
          <Text >seccion Productos</Text>
        </View>
    )
}

const styles = StyleSheet.create({  
    productsSection: {
      // backgroundColor: 'cyan',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }
});

export default Products