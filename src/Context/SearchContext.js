"use client"
import { createContext, useState,useEffect } from "react";
import { SearchVideos } from "@/Utils/fetchData";


export const SearchContext = createContext(); //initialiizing a context called SearchContext

export const SearchProvider = ({children}) => {
    const [ result, setResult ] = useState([])
    useEffect(()=>{
        const fetchDefaultVideos = async()=>{
            const data = await SearchVideos('search/?query=trending')
            setResult(data.videos)
        }
        fetchDefaultVideos();
    }, [])

return(
    <SearchContext.Provider value={{result,setResult}}>

        {children}
    </SearchContext.Provider>
    )}