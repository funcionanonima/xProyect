import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions, Component, ActivityIndicator } from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Constants from 'expo-constants';

const initialState = {
    latitude: null,
    longitude: null,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
}

const App = (props) => {
  const [currentPosition, setCurrentPosition] = useState(initialState);

  useEffect (() => {
    navigator.geolocation.getCurrentPosition(position=>{
      const {longitude, latitude} = position.coords;
      setCurrentPosition({
        ...currentPosition,
        latitude,
        longitude,
      })
    },
      error => alert(error.message),
      {timeout: 4000, maximunAge: 1000}
    )      
  }, [] )

  return currentPosition.latitude ? (
    <View style={styles.container}>
      <MapView style={styles.mapStyle}
        provider={PROVIDER_GOOGLE}
        initialRegion={ currentPosition }
      >
      <Marker coordinate={{ 
        latitude: currentPosition.latitude,
        longitude: currentPosition.longitude
        }} 
      />
      </MapView>
    </View>
  ) : <ActivityIndicator style={{flex:1}} animating size='large'/>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default App;