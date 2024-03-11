import React from 'react'
import styles from './FiltersMenu.module.scss'
import { ProductsContext } from '../../contexts/ProductsContext'
import { useState, useContext, useEffect } from 'react'


const FiltersMenu = () => {

    const { products, setProducts } = useContext(ProductsContext)
    const { filterProducts, setFilterProducts } = useContext(ProductsContext)

    const [selectedCheckboxes, setSelectedCheckboxes] = useState({});


    const filterCategory = (e) => {
        const category = e.target.value.toLowerCase();
        const isChecked = e.target.checked;

        // Actualiza el estado de los checkbox seleccionados
        setSelectedCheckboxes((prevState) => ({
            ...prevState,
            [category]: isChecked,
        }));
    };

    useEffect(() => {
        // Filtra los productos según los checkbox seleccionados
        const filteredProducts = products.filter((item) => {
            if (Object.keys(selectedCheckboxes).length === 0) {
                // Si no hay ningún checkbox seleccionado, muestra todos los productos
                return true;
            }
            return selectedCheckboxes[item.category.toLowerCase()] || selectedCheckboxes[item.subCategory.toLowerCase()] ;
        });      

        setFilterProducts(filteredProducts);
        console.log(filteredProducts)
    }, [selectedCheckboxes, setFilterProducts, products]);


    return (
        <div>
            <h2 className='fs-3 fw-light'>Filtrar productos</h2>
            <div className={styles['filter-menu']}>
                <h3>Dulces</h3>
                {/* Primer Filtro por Marca */}
                <ul>
                    <li>
                        <label>
                            <input type="checkbox" name="category" value="alfajores" onChange={filterCategory}  checked={selectedCheckboxes['alfajores'] || false}/>
                            <span>Alfajores</span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="category" value="galletas" onChange={filterCategory} checked={selectedCheckboxes['galletas'] || false} />
                            <span>Galletas</span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="category" value="memoria ram" onChange={filterCategory} checked={selectedCheckboxes['memoria ram'] || false} />
                            <span>Turrones</span>
                        </label>
                    </li>
                </ul>
                {/* Segundo filtro por modelo */}
                <h3>Bebidas</h3>
                <ul>
                    <li>
                        <label>
                            <input type="checkbox" name="brand" value="cervezas" onChange={filterCategory} checked={selectedCheckboxes['cervezas'] || false}  />
                            <span>Cervezas</span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="brand" value="gaseosas" onChange={filterCategory} checked={selectedCheckboxes['gaseosas'] || false} />
                            <span>Gaseosas</span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="brand" value="corsair" onChange={filterCategory} checked={selectedCheckboxes['corsair'] || false} />
                            <span>Latas de cerveza</span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="brand" value="intel" onChange={filterCategory} checked={selectedCheckboxes['intel'] || false} />
                            <span>Latas de gaseosas</span>
                        </label>
                    </li>
                    {/* <li>
                        <label>
                            <input type="checkbox" name="brand" value="adata" onChange={filterCategory} checked={selectedCheckboxes['adata'] || false} />
                            Adata
                        </label>
                    </li> */}
                </ul>
            </div>

            <div>
                <h3>Precio</h3>
                <input type="range" min="0" max="1000" step="10" value="900" id="precio-slider" />
                <span id="precio-value">$50</span>
            </div>
        </div>
    )
}

export default FiltersMenu