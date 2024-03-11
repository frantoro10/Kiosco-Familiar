import React, {useContext} from 'react'
import {ProductsContext} from '../../contexts/ProductsContext'

const Count = () => {
    const {selectedCount, setSelectedCount} = useContext(ProductsContext);

    const addCount = () => {
        setSelectedCount (selectedCount + 1 )
    }

    const lessCount = () => {
        if (selectedCount > 1)
        setSelectedCount( selectedCount - 1)
    }

    return (
        <div>
            <button onClick={addCount}>+</button>
            {selectedCount}
            <button onClick={lessCount}>-</button>
        </div>
    )
}

export default Count