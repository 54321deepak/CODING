/*
//  video 19 + para.jsx + heading.jsx +App.jsx
import React from 'react';
import Heading from './Heading';
import Para from './Para' 

function  App() {
    return  (
<>
    <Heading/>
    <Para/>
    </>
)
}

export default App;
*/

/*

// video20 + index.jsx

import React from 'react';

function  App() {
    let curdate =new Date(2020,5,5,20)
curdate = curdate.getHours()
let greeting=" ";

const cssstyle={ };


if(curdate>=1 && curdate<12){
    greeting="good morning";
    cssstyle.color="red";
}else if(curdate>=12 && curdate<19){
    greeting="good afternoon";
    cssstyle.color="green";
}else{
    greeting="good night";
    cssstyle.color="blue";
}

return(
    <>
<div>
<h1>hello sir, <span style={cssstyle}>  {greeting} </span>  </h1>
</div>
</>
)

}

export default App;

*/

/*  
//video 21 + app.jsx

let a= "thapa";
let b ="technical"
function c(){
    const name="deepak"
    return name 
}

function d(){
    const names="soniya"
    return  names 
}

export default a;
export {b,c,d}

*/

/*
// video 22+ index.jsx
function add(a,b){
    let add=a+b;
    return  add 
}

function sub(a,b){
    let sub=a-b;
    return  sub 
}

function mul(a,b){
    let mul=a*b;
    return  mul 
}

function div(a,b){
    let div=a/b;
    return  div
}

export {add,sub,mul,div}
*/