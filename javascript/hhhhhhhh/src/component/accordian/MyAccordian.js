import React, { useState } from 'react'

const MyAccordian = ({question ,answer}) => {
    const[show,setshow]=useState(false)
  return (
    <><div>
    
        <h1 onClick={()=>setshow(!show)}>{show? "-" :  "+"}</h1>
        <h1>{question}</h1>
    </div>
    
    {show ? <p>{answer}</p>: <p></p>}d
    </>
  )
}

export default MyAccordian
