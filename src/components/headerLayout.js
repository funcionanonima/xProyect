import React from 'react'
import {View, Text, Alert, StyleSheet} from 'react-native'

function Header(){
    return(
        <View style={styles.header}>
            {/* "boton" para seccion Productos" */}
            <Text
                onPress={() => Alert.alert('Seccion Productos')}>
                Productos
            </Text>
            {/* "Boton para seccion Ordenes" */}
            <Text
                onPress={() => Alert.alert('Seccion Ordenes')}>
                Ordenes
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({  
    header: {flex:0.2, 
        flexDirection: 'row',
        alignItems:'center', 
        justifyContent:"space-around",    
    },
});

export default Header