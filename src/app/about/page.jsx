"use client"

import { useState, useEffect } from "react";

const page = () => {
    const [ count, setCount ] = useState(0);
    const handleAdd = () => {
       setCount(count + 1);
       
      
    } 
    const handleSubtrate=() => {
      setCount(count - 1);
    
    }
    useEffect(() =>{
      alert(`the current state is ${count}`)
    
 },[count])

 return (
  <div>
    <h1 className="font-bold">count Application</h1>
    <h1>{count}</h1>
    <div className="flex gap-8">
      <button className=" cursor-pointer" onClick={handleAdd}> +</button>
      <button className=" cursor-pointer" onClick={handleSubtrate}> - </button>
    </div>
  </div>
 )

}
export default page