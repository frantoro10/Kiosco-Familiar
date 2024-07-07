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
            return selectedCheckboxes[item.category.toLowerCase()]
        });

        setFilterProducts(filteredProducts);
        console.log(filteredProducts)
    }, [selectedCheckboxes, setFilterProducts, products]);


    return (
        <div>
            <div className={` d-flex flex-md-column flex-sm-row ${styles['filter-menu']}`}>
                <label>
                    <input className='ms-2' type="checkbox" name="category" value="kiosco" onChange={filterCategory} checked={selectedCheckboxes['kiosco'] || false} />
                    <span>Kiosco</span>
                </label>
                <label>
                    <input className='ms-2' type="checkbox" name="category" value="almacen" onChange={filterCategory} checked={selectedCheckboxes['almacen'] || false} />
                    <span>Almacen</span>
                </label>
                <label>
                    <input className='ms-2' type="checkbox" name="category" value="bebidas" onChange={filterCategory} checked={selectedCheckboxes['bebidas'] || false} />
                    <span>Bebidas</span>
                </label>
                <label>
                    <input className='ms-2' type="checkbox" name="category" value="lacteos" onChange={filterCategory} checked={selectedCheckboxes['lacteos'] || false} />
                    <span>Lacteos</span>
                </label>
                <label>
                    <input className='ms-2' type="checkbox" name="category" value="farmacia" onChange={filterCategory} checked={selectedCheckboxes['farmacia'] || false} />
                    <span>Farmacia</span>
                </label>
            </div>
        </div>
    )
}

export default FiltersMenu


{/* <ul>
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
// </ul> */}