"use client"

import React, {useState} from "react";
import Navbar from "@/components/Navbar-components/Navbar";
import Feeds from "@/components/Maincontent/Feeds";
import SideBar from "@/components/SideContents/Sidebar";
export default function Home() {

 const [count, setCount] =useState("data")

  return (
  <div className="page_container">
  <Navbar/>

  <div className="con">
    <SideBar/>
    <Feeds cou={count}/>
  </div>


  </div>

  );
}