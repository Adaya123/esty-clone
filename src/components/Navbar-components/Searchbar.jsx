"use client"

import React from 'react'
import { SearchVideos } from '@/Utils/fetchData'
import { useState } from 'react'

const Searchbar = () => {

const [ loading, setLoading ] = useState(false)
const [ result, setResult ] = useState([])
const [ query, setQuery ] = useState("")


const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true)

    const data = await SearchVideos(`search/?query=${query}`)
    setResult(data)
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
