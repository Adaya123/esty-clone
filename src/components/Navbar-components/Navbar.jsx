import React from 'react'
import Image from 'next/image';
import YoutubeImage from './YoutubeImage'
import { RxHamburgerMenu } from "react-icons/rx";
import Searchbar from './Searchbar';
import SideContext from '@/Context/SideContext';
import { useContext } from 'react';

const Navbar = () => {
  const {toggle, setToggle} =useContext(SideContext)
  const handleChange = () =>{
    setToggle((prev) => !prev)
  }
  return (
   <div className='flex gap-10 mt-3'>
      <div className='flex item-center gap-3 ml-3'>
        <div className='ham'>
          <RxHamburgerMenu onClick={handleChange}/>
        </div>
      <YoutubeImage/>
  

<div className='nig'>
  <h1>NG</h1>
  </div>
  </div>
    <div className='image_page'>
    <div>
      <Searchbar/>
    </div>
    <div>
    <div className='image_page1'>
      <img src="./microphone.png" width={20} alt=""/>
    </div>
   </div>
   <div className='video'><img src="./VD.jpg" width={20} alt=""/>
   </div>
   <div className='note'>
    <img src="./notification.png" width={20} alt=""/>

   </div>
   </div>
   </div>
  )

}

export default Navbar
