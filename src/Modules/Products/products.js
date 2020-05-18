import React, {Component} from 'react'
import {View, Button} from 'react-native'

import { db } from '../../App/services/config'

import FList from '../Components/listProducts'

class Products extends Component {

  constructor(props){
    super(props);

    this.state = {
      products: null,
    }    
  }

  componentDidMount(){
    db.collection("product")
      .get()
      .then( snapshot => {
        const products = []
        snapshot.forEach(doc => {
          const data = doc.data()
          products.push(data)
        })
        this.setState({
          products: products
        })
      })
      .catch( error => console.log(error))
  }      
    
  render(){

    const {products} = this.state

      return(       
        <FList data = {products} 
          /> 
      )
  }
    
}

export default Products