"use client"

import { Children, createContext,useState } from "react"


export const SideContext = createContext();
export const SideProvider =({Children}) => {
    const [toggle, setToggle] = useState(false)
    

    return(
        <SideContext.Provider value={{toggle, setToggle}}>
        {Children}
        </SideContext.Provider>
    )
}



export default SideContext