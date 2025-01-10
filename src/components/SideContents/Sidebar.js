import React, {useState} from 'react'
import MiniSideBar from './MinisideBar'
import MaxiSideBar from './MaxiSideBar'
import {SideContext} from 'react'
import { useContext } from 'react'

const Sidebar = () => {
  const {toggle, setToggle}= useContext(SideContext)

  return (
    <div>
      {
        toggle ? <MaxiSideBar/> : <MiniSideBar/> 
      }
      {/*<button  onClick={handleChange}>changes</button></button>*/}
    </div>
  )
}

export default Sidebar
