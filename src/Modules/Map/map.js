import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Component, ActivityIndicator } from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

const initialState = {
    latitude: null,
    longitude: null,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
}

const App = (props) => {
  const [currentPosition, setcurrentPosition] = useState(initialState);

  useEffect (() => {
    navigator.geolocation.getCurrentPosition(position=>{
      const {longitude, latitude} = position.coords;
      setcurrentPosition({
        ...currentPosition,
        latitude,
        longitude,
      })
    },
      error => alert(error.message),
      {timeout: 2000, maximunAge: 1000}
    )      
  }, [] )

  return currentPosition.latitude ? (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={{flex:1}}
      initialRegion={ currentPosition }
  />
  ) : <ActivityIndicator style={{flex:1}} animating size='large'/>
}

export default App;





// import React, { useState, useEffect } from 'react';
// import { Platform, Text, View, StyleSheet, Dimensions, Component } from 'react-native';
// import Constants from 'expo-constants';
// import * as Location from 'expo-location';
// import MapView from 'react-native-maps';

// export default function App() {
//   const [location, setLocation] = useState(null);
//   const [errorMsg, setErrorMsg] = useState(null);

//   useEffect(() => {
//     if (Platform.OS === 'android' && !Constants.isDevice) {
//       setErrorMsg(
//         'Oops, this will not work on Sketch in an Android emulator. Try it on your device!'
//       );
//     } else {
//       (async () => {
//         let { status } = await Location.requestPermissionsAsync();
//         if (status !== 'granted') {
//           setErrorMsg('Permission to access location was denied');
//         }

//         let location = await Location.getCurrentPositionAsync({});
//         setLocation(location);
//       })();
//     }
//   });

//   let text = 'Waiting..';
//   if (errorMsg) {
//     text = errorMsg;
//   } else if (location) {
//     text = JSON.stringify(location);
//   }

//   return (
//     <View style={styles.container}>
//       {/* <Text style={styles.paragraph}>{text}</Text> */}
//       <Text style={{justifyContent:'center',alignItems:'center'}}>{JSON.stringify(location.coords)}</Text>
//       {/* <MapView style={styles.mapStyle}
//           region={{
//             latitude: location.coords.latitude,
//             longitude: location.coords.longitude,
//             latitudeDelta: location.coords.altitude,
//             longitudeDelta: location.coords.accuracy,
//           }}
//         /> */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingTop: Constants.statusBarHeight,
//     backgroundColor: '#ecf0f1',
//   },
//   paragraph: {
//     margin: 24,
//     fontSize: 18,
//     textAlign: 'center',
//   },
//   mapStyle: {
//         width: Dimensions.get('window').width,
//         height: Dimensions.get('window').height,
//       },
// });


// import React from 'react';
// import MapView from 'react-native-maps';
// import { StyleSheet, Text, View, Dimensions } from 'react-native';

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <MapView style={styles.mapStyle}
        
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   mapStyle: {
//     width: Dimensions.get('window').width,
//     height: Dimensions.get('window').height,
//   },
// });
