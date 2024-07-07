import React, { createContext, useState } from 'react';

export const CountContext = createContext();

export const CountProvider = ({ children }) => {
    const [selectedCount, setSelectedCount] = useState(1);
    

    return (
        <CountContext.Provider value={{ selectedCount, setSelectedCount }}>
            {children}
        </CountContext.Provider>
    );
}; 