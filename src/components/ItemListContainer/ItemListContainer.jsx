import React from 'react'
import styles from "./ItemListContainer.module.scss"
// Instalar Axios. | Extraer json con objetos, y crear el catalogo de productos.

const ItemListContainer = ({productsData}) => {

  return (
    <div>
      {productsData && productsData.map((item) => {
        return (
          <div className={styles.cardContainer} key={item.id}>
            <div className={styles.cardImage}>
                <img src={item.img} alt="" />
            </div>
            <div className={styles.cardDescription}>  
              <div className={styles.cardPrice}> 
                {item.price}
              </div>
              <p>{item.name}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ItemListContainer