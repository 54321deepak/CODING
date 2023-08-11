import React, { useState } from 'react'
import { questions } from './api'
import MyAccordian from './MyAccordian'

const Accordian = () => {
    const[state,setstate]=useState(questions)
  return (
    <><section className="text-bg-primary" style={{ margin:"100px", padding:"0px"}}> 
    {state.map((value)=>{
        return <MyAccordian key={value.id} {...value}/>;
    })}
    </section>
    </>
  )
}

export default Accordian
