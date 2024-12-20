"use client"

import React from 'react'
import { SearchVideos } from '@/Utils/fetchData'
import { useState, useContext } from 'react'
import Image from 'next/image'
import { SearchContext } from '@/Context/SearchContext'

const Searchbar = () => {
const { result, setResult } = useContext(SearchContext)
const [ loading, setLoading ] = useState(false)
// const [ result, setResult ] = useState([])
const [ query, setQuery ] = useState("")


const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true)

    const data = await SearchVideos(`search/?query=${query}`)
    setResult(data.videos)
    console.log(data)
    setLoading(false)
}

  return (
    <div>
        <form onSubmit={handleSearch}>
        <input type="text" placeholder='Search...' 
        value={query}
        
        onChange = {(e) => setQuery( e.target.value)}
        />
        <button>
            Search
        </button>
        </form>
    {
        loading ? <p>Loading....</p> : null
    }

    
    </div>
  )
}

export default Searchbar
 