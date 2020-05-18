import React, {Component} from 'react'

import { db } from '../../App/services/config'

import FList from './flist'

class Products extends Component {

  constructor(props){
    super(props);

    this.state = {
      error: null,
      products: null,
      newOrder: null
    }
  }

  componentDidMount(){
    db.collection("product")
      .get()
      .then( snapshot => {
        const products = []
        snapshot.forEach(doc => {
          const data = doc.data()
          // console.log(data)
          products.push(data)
        })
        this.setState({
          products: products
        })
      })
      .catch( error => console.log(error))
  }    

  addOrder(){
    alert('funciona')
  }
    
  render(){

    const {products} = this.state
    console.log(products)

      return(        
        <FList data = {products} 
        />
      )
  }
    
}

export default Products