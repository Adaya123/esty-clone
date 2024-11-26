"use client"

import React from 'react'
import { SearchVideos } from '@/Utils/fetchData'
import { useState } from 'react'
import Image from 'next/image'

const Searchbar = () => {

const [ loading, setLoading ] = useState(false)
const [ result, setResult ] = useState([])
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

    {
      result.map((a,c) =>
        (
        <div key= {c}>
        <h1>{a.title}</h1>
        <p>{a.number_of_views}</p>
        <p>{a.video_length}</p>
        <img src={a.thumbnails[0].url}
          alt="image" />
        </div>
        )
      )}
    
    </div>
  )
}

export default Searchbar
 