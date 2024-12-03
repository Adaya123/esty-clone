"use client"

import React, { useState } from "react";
import Navbar from "@/components/Navbar-components/Navbar";
import Feeds from"@/components/Maincontent/Feeds";
import Sidebar from "@/components/SideContents/Sidebar";
export default function Home() {

  const [ count, setCount] = useState("data")
  return(

    <div className="Container page-container">
      <Navbar/>
    <div className="com">
      <Sidebar/>
      <Feeds cou={count}/>
    </div>
    </div>
  )
}
