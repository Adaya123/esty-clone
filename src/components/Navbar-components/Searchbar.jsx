"use client"

import React from 'react'
import { SearchVideos } from '@/Utils/fetchData'
import { useState } from 'react'

const Searchbar = () => {
    const [ count, setCount] = useState(0);
    function update() {
        setCount(count+1)

    }
    function date() {
        setCount(count-1)
    }

  return (
    <div>
        <form>
        <input type="text" placeholder='Search...'/>
        <button>
            Search
        </button>
        </form>
        <h1>{count}</h1>
        <button onClick={update}>update count</button>
        <button onClick={date}> count</button>
    </div>
  )
}

export default Searchbar
