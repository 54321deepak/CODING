import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ComA = () => {
    const [num,setnum]=useState("")

    useEffect(()=>{
        async function nam(){
const res=await axios.get(`‘https://pokeapi.co/api/v2/pokemon?limit=151'`)
console.log("ssss")
        }
        nam()
    })
  return (
    <>
    <p>{num}</p>
     <select onChange={(event)=>{
        setnum(event.target.value)
     }}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
     </select> 
    </>
  )
}

export default ComA
