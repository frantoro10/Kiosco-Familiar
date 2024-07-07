import React, { useState, useEffect } from 'react';

const Count = ({ count, onChangeCount }) => {
    const [selectedCount, setSelectedCount] = useState(count);

    useEffect(() => {
        setSelectedCount(count);
    }, [count]);

    const addCount = () => {
        const newCount = selectedCount + 1;
        setSelectedCount(newCount);
        onChangeCount(newCount);
    };

    const lessCount = () => {
        if (selectedCount > 1) {
            const newCount = selectedCount - 1;
            setSelectedCount(newCount);
            onChangeCount(newCount);
        }
    };

    return (
        <div className='mt-2'>
            <button onClick={lessCount} className='me-2 mb-2'>-</button>
            {selectedCount}
            <button onClick={addCount} className="ms-2 mb-2">+</button>
        </div>
    );
};

export default Count;
