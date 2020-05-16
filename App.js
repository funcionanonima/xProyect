import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

class xProject extends Component {

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.Text}>does it takes too much?</Text>
      </View>    
    );
  }
}

const styles = StyleSheet.create({  
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column',
  },
  Text: {
    color: '#fff',
  },
});

export default xProject;
