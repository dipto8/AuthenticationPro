import React, { createContext } from 'react';


export const AppContext = createContext(null)
const ContextProvider = ( {children}) => {
    const user = {
        name:'polly',
        age: 14
    }
    return (
        <AppContext.Provider value={user}>
            {children}
        </AppContext.Provider>
    );
};

export default ContextProvider;