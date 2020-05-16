import React from 'react';

// Traemos stack navigation
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

// Se importa vista home
import HomeScreen from './src/Modules/Home/home'
import OrdersScreen from './src/Modules/Orders/orders'

const AppStackNavigator = createStackNavigator({
  HomeS: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'RappiApp'
    }
  },  
  Orders: {
    screen: OrdersScreen,
    navigationOptions: {
      title: 'RappiApp'
    }
  }
});

export default createAppContainer(AppStackNavigator)