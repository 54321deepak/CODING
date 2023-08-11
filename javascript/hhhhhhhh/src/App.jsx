import React, { useState } from 'react'
import { useEffect } from 'react'

const App = () => {
  const [ll,about] = useState(0);
  useEffect(()=>{
    console.log(`aaaa${ll}`)
  })  

 
  return (
    <>
      <button onClick={()=>about(ll+1)}>ddddddddddddd</button>
      <p>{ll}</p>
    </>
  )
}

export default App;