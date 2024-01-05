import React, {useState,useEffect} from 'react'
import {useContext} from 'react'
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import {ProductsContext} from "../contexts/ProductsContext"

const Home = () => {

  const {products} = useContext(ProductsContext);
  
  return (
    <div>
      <div>
        <ItemListContainer productsData={products}  />
      </div>
    </div>
  )
}

export default Home