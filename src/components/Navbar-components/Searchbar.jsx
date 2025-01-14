"use client"

import React, {useContext } from 'react'
import { SearchVideos } from '@/Utils/fetchData'
import { useState } from 'react'
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
    <div style={{
      display:"flex",
      alignItems:"center",
      border:"1px solid #ccc",
      borderRadius:"20px",
      padding:"5px 10px",
      width:"500px",
      marginLeft:"160px"
    }}>
        <form onSubmit={handleSearch}>
        <input type="text" placeholder='Search...' 
        style={{
          flex:1,
          border:"none",
          fontSize:"14px",
          padding:"5px",
          borderRadius:"20px",
          backgroundColor:"transparent",
          width:"400px"
        }}
        value={query}
        
        onChange = {(e) => setQuery( e.target.value)}
        />
        <button className='search'>
          <img src="./search.png" height={20} width={20} alt="image" />
          
        </button>
        </form>
    {/* {
        loading ? <p>Loading....</p> : null
    } */}
  {/*{
    result.map(( eachItem,index, array)=>(
      <div key={index}>
        <h1>{eachItem.title}</h1>
        <p>{eachItem.number_of_items}</p>
        <h2>{eachItem.video_length}</h2>
        <img src={eachItem.thumbnails[0].url} alt="image />
      </div>
    ))
  }*/}
    
    </div>
  )
}

export default Searchbar
 