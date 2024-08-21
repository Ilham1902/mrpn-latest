import React, { useState } from 'react';
import { ExsumContext, exsumDefault } from '../context/exsumContext';

export const ExsumProvider: React.FC<{ children: any }> = ({ children }) => {
    const [exsum, setExsum] = useState(exsumDefault.exsum)

    return (
        <ExsumContext.Provider value={{exsum, setExsum}}>
            {children}
        </ExsumContext.Provider>
    );
}