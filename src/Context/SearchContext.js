"use client"
import { createContext, useState } from "react";


export const SearchContext = createContext(); //initialiizing a context called SearchContext

export const SearchProvider = ({children}) => {
    const [ result, setResult ] = useState([])

return(
    <SearchContext.Provider value={{result,setResult}}>

        {children}
    </SearchContext.Provider>
    )}