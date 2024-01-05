import React, { createContext, useState, useEffect } from 'react';

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('./src/data/data.json');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error al obtener el array de productos", error);
      }
    };

    fetchData();
  }, []); // Cambiado de [products] a []

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};