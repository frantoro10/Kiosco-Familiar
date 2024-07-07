import React, { useState, useContext } from 'react';
import { getFirestore, doc, updateDoc } from 'firebase/firestore';
import { ProductsContext } from '../../contexts/ProductsContext';
import Count from '../Count/Count';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './ItemListContainer.module.scss';

const ItemListContainer = ({ productsData }) => {
  const { cartProducts, setCartProducts } = useContext(ProductsContext);
  const [newPrices, setNewPrices] = useState({});
  const [showChangePrice, setShowChangePrice] = useState({});
  const [newCostPrices, setNewCostPrices] = useState({});
  const [showCostPrices, setShowCostPrices] = useState({});
  const [productCounts, setProductCounts] = useState({});

  const handleAddProducts = (product) => {
    const existingProductIndex = cartProducts.findIndex((item) => item.id == product.id);
    const updatedCartProducts = [...cartProducts];
    const selectedCount = productCounts[product.id] || 1;

    if (existingProductIndex !== -1) {
      updatedCartProducts[existingProductIndex].price += product.price * selectedCount;
      updatedCartProducts[existingProductIndex].quantity += selectedCount;
    } else {
      updatedCartProducts.push({ ...product, quantity: selectedCount, price: product.price * selectedCount, unitPrice: product.price });
    }
    setCartProducts(updatedCartProducts);
    console.log(cartProducts);
  };

  const handleChangeCount = (productId, newCount) => {
    setProductCounts({
      ...productCounts,
      [productId]: newCount,
    });
  };

  const handleChangePrice = (productId, newPrice) => {
    setNewPrices({
      ...newPrices,
      [productId]: newPrice,
    });
  };

  const toggleChangePrice = (productId) => {
    setShowChangePrice({
      ...showChangePrice,
      [productId]: !showChangePrice[productId],
    });
  };

  const changePrice = async (productId) => {
    const db = getFirestore();
    const productRef = doc(db, 'fake-database', productId);
    try {
      await updateDoc(productRef, {
        price: parseFloat(newPrices[productId]),
      });
      alert('Precio final actualizado exitosamente! Presiona F5 para guardar los cambios.');
      toggleChangePrice(productId);
    } catch (error) {
      alert('Error actualizando el precio', error);
    }
  };

  const handleChangeCostPrice = (productId, newPrice) => {
    setNewCostPrices({
      ...newCostPrices,
      [productId]: newPrice,
    });
  };

  const toggleChangeCostPrice = (productId) => {
    setShowCostPrices({
      ...showCostPrices,
      [productId]: !showCostPrices[productId],
    });
  };

  const changeCostPrice = async (productId) => {
    const db = getFirestore();
    const productRef = doc(db, 'fake-database', productId);
    try {
      await updateDoc(productRef, {
        cost: parseFloat(newCostPrices[productId]),
      });
      alert('Precio de costo actualizado exitosamente! Presiona F5 para guardar los cambios.');
      toggleChangePrice(productId);
    } catch (error) {
      alert('Error actualizando el precio de costo', error);
    }
  };

  return (
    <div className={`${styles["product-container"]}`}>
      {productsData &&
        productsData.map((item) => (
          <div className={`${styles['card-container']} `} key={item.id}>
            <div className={`${styles['card-img']}`}>
              <img src={item.img} alt="" /> 
            </div>
            <div className={`${styles['card-info']} d-flex flex-column`}>
              <span className={`${styles['card-name']}`}>{item.name}</span>
              <div className={`${styles['price-container']} d-flex`}>
                <div className={`${styles['price-box']} me-2`}>
                  <span>${item.price}</span>
                </div>
                <div className="" style={{ cursor: 'pointer' }}>
                  <FontAwesomeIcon icon={faPenToSquare} onClick={() => toggleChangePrice(item.id)} size="xl" />
                </div>
              </div>

              <div className={`d-flex justify-content-center mt-1 ${styles['cost-container']}`}>
                <span className="me-2">C: ${item.cost} </span>
                <div className="d-flex justify-content-center align-items-center" style={{ cursor: 'pointer' }}>
                  <FontAwesomeIcon icon={faPenToSquare} onClick={() => toggleChangeCostPrice(item.id)} size="lg" />
                </div>
              </div>
              
              <div>
                <Count
                  count={productCounts[item.id] || 1}
                  onChangeCount={(newCount) => handleChangeCount(item.id, newCount)}
                />
              </div>
              <button onClick={() => handleAddProducts(item)} className={`${styles["add-button"]}`}>Agregar</button>

               {showCostPrices[item.id] && (
                <>
                  <input
                    type="number"
                    value={newCostPrices[item.id] || ''}
                    onChange={(e) => handleChangeCostPrice(item.id, e.target.value)}
                    placeholder="Escribi el nuevo precio de costo"
                    className="mb-1"
                  />
                  <span onClick={() => changeCostPrice(item.id)} className={`${styles['changep-button']}`}>
                    Modificar COSTO
                  </span>
                </>
              )}

              {showChangePrice[item.id] && (
                <>
                  <div className="d-flex flex-column mt-2">
                    <input
                      type="number"
                      value={newPrices[item.id] || ''}
                      onChange={(e) => handleChangePrice(item.id, e.target.value)}
                      placeholder="Precio"
                      className="mb-1"
                    />
                    <span onClick={() => changePrice(item.id)} className={`${styles['changep-button']}`}>
                      Cambiar Precio
                    </span>
                  </div>
                </>
              )} 

            </div>
          </div>
        ))}
    </div>
  );
};

export default ItemListContainer;
