import React, { useState } from "react";
 
export const Context = React.createContext();
// eslint-disable-next-line react/prop-types
export const ContextProvider = ({ children }) => {
    const [items, setItems] = useState();
 
    return (
        <Context.Provider value={{ items, setItems }}>
            {children}
        </Context.Provider>
    );
};