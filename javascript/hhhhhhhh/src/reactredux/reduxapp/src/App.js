import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import { incnumber,decnumber } from './action'
const App = () => {
  const mysta=useSelector((s)=> { 
     return s.changethenumber})
  const dispatch =useDispatch();
  return (
    <>
      <h1>increment/decrement counter</h1>
      <h4>using react and redux</h4>

<div>
  {/* <a title="decrement" onClick={()=>dispatch(decnumber())}> - </a> */}
  <input type="text" name="quality" value={mysta}/>
  <a title='increment' onClick={()=>dispatch(incnumber(5))}>+</a>
 </div>

    </>
  ) 
}

export default App
//youtube coding scenes