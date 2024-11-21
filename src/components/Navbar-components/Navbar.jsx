import React from 'react'
import YoutubeImage from './YoutubeImage'
import { RxHamburgerMenu } from "react-icons/rx";
import Searchbar from './Searchbar';

const Navbar = () => {
  return (
   <div className='flex gap-14'>
      <div className='flex item-center gap-6 ml-7'>
        <RxHamburgerMenu/>
      <YoutubeImage/>
    </div>

    <div>
      <Searchbar/>
    </div>
   </div>
  )
}

export default Navbar
