import React, { useState, useEffect } from 'react'
import styles from "./Home.module.scss"
import { useContext } from 'react'
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import FiltersMenu from "../components/Filters/FiltersMenu"
import SearchBar from "../components/Filters/SearchBar";
import Calculator from '../components/Calculator/Calculator';

import { ProductsContext } from "../contexts/ProductsContext"

const Home = () => {

  const { products, filterProducts } = useContext(ProductsContext);

  return (
    <div className=''>
      <div className={`${styles["brand-container"]} mt-1 d-flex flex-row  align-items-center justify-content-center`}>
        <img src="./src/assets/brand/big-bull.webp" alt="" />
        <h1 className='mb-2 ms-2 ' style={{ fontSize: "2em" }}>Big Bull</h1>
      </div>
      <div className={`${styles["calculator-container"]}`}>
        <Calculator/>
      </div>
      {/* <h2 className='text-center'>Catalogo</h2> */}
      <div className='my-3'>
        <SearchBar />
      </div>
      <div className='container-fluid border '>
        <div className='row flex-row'>
          <div className={` ${styles["filter-container"]} col-12 col-md-3  d-flex justify-content-center `}>
            <FiltersMenu />
          </div>
          <div className='col-12 col-md-9'>
            {/* En informática un operador ternario es un operador que toma tres argumentos. Este operador ternario puede pasar varias líneas de código a una sola línea en lenguajes que puedan usarlo tales como | Si hay productos en el array filterProducts, mostrarme este , si no el array completo de productos (products) */}
            {filterProducts.length > 0 ? (<ItemListContainer productsData={filterProducts} />) : (<ItemListContainer productsData={products} />)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home