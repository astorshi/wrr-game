import { createContext, useContext, useState } from "react";

const unitsContext = createContext();

export const UnitsContextProvider = ({ children }) => {
    const [units, setUnits] = useState([]);
    return (
        <unitsContext.Provider value={{ units, setUnits }}>
            {children}
        </unitsContext.Provider>
    );
};

export const useUnitsContext = () => useContext(unitsContext);