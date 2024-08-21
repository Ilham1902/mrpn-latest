import React, { useState } from 'react';
import { RKPContext, rkpDefault } from '../context/rkpContext';

export const RKPProvider: React.FC<{ children: any }> = ({ children }) => {
    const [rkp, setRkp] = useState(rkpDefault.rkp)

    return (
        <RKPContext.Provider value={{rkp, setRkp}}>
            {children}
        </RKPContext.Provider>
    );
}