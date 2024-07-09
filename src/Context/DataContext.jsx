/* eslint-disable react/prop-types */
import { createContext, useState} from 'react';

// Create a context
export const DataContext = createContext();

// Create a provider component
export const DataProvider = ({ children }) => {
    const [query, setQuery] = useState("")
   


    const handleInputChange = (event) => {
        setQuery(event.target.value)

    }
   
   

    const value ={
        handleInputChange,
        query
    }
  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};

