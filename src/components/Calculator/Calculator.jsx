import React from 'react'
import Modal from 'react-modal'; 
import {useState, useEffect, useContext} from 'react';
import {ProductsContext} from '../../contexts/ProductsContext';
import { faCalculator} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import styles from './Calculator.module.scss'

const Calculator = () => {
    const [openModal, setOpenModal] = useState(false); // Estado para controlar la visibilidad del modal. Se pasa como atributo al componente <Modal isOpen={openModal}> 
    const {cartProducts} = useContext(ProductsContext); // Accedemos al array del carrito de productos

    const handleShow = () => {
      setOpenModal(true);
    } // Boton para mostrar modal (true)

    const handleClose = () => {
      setOpenModal(false);
    } // Boton para ocultar modal (false)



  return (
    <div>
    <FontAwesomeIcon icon={faCalculator} size="2xl" className={` ${styles["calculator-icon"]}`} onClick={handleShow} />

    <Modal isOpen={openModal} className={`${styles["modal"]}`}> 
      <span>Productos:</span>

      <div>

      </div>

      <div>
      <button onClick={handleClose}>Cerrar</button>
      </div>

    </Modal>

    </div>
  )
}

export default Calculator