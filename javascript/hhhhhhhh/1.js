/*
///////////1 react is javascript library & used component to reuse. React is used to build single-page applications. 

React is a free and open-source front-end JavaScript library for building user interfaces based on components.
React is a JavaScript library for building user interfaces.

React is used to build single-page applications.

React allows us to create reusable UI components.

 single-page applications means whole application in single-page me Hai and only important pae is update not full application usin virtual dom.  


//////////2 npm = node package manaer   
//////////3 install vs code   + 3 more items in vs code   

////////////4  set up react environment
1= download nodejs   you get npm            node  -version
2=install vscode
3=1=npm install -g create-react-app
3=2=create-react-app  --version
3=3=go  d drive , folder create     ,then   create-react-app app ka name, then npm start 
 */

import { Component } from "react";

///////////////5 remove waste file and make first program  , import or require
///////////////6jsx  html contant in reactdom.rendom are jsx which is compiled by bable
// bablel is compiler in raect   


// What is JSX? JSX stands for JavaScript XML. JSX allows us to write HTML in React (javascipt file).normally we write HTML in HTML file not in javascript.

////////////////7 use multi jsx elements = use div or use[,]
/////////////////////8 react.fragment = div use karte hai to project me div  ban jata hai hum vo nahichahte so use <react.fragment> </react.fragment> or <></>

// allows you to return multiple elements from a React component by allowing you to group a list of children without adding extra nodes to the DOM

// In React, whenever you want to render something on the screen, you need to use a render method inside the component. This render method can return single elements or multiple elements. The render method will only render a single root node inside it at a time. However, if you want to return multiple elements, the render method will require a 'div' tag and put the entire content or elements inside it. This extra node to the DOM sometimes results in the wrong formatting of your HTML output and also not loved by the many developers.

/////////////////////9 easy program
/////////////////////10 we write javascript in jsx data use{},jsx expression use variable and 2+3 only in jsx ={} , loop not work

// {} = curly brackets
/////////////////////////11 template literal in react =  <h1>{`ok ${a}  ${b}`}</h1>

// backtick(`) characters, 
// double quotes "" or single quotes ''.

/////////////////////// 12 date and time   =   let date = new Date().toLocaleDateString(); , let time = new Date().toLocaleTimeString();
//////////////////////////13 attribute = src,href,class are same for  jsx and javascript and html   ruf= <a> <p> etc are tag 
// attribute  data in variable then {variable} instead of "" directly , par normal "" bhi kam karega
/////////////////////////14 css styling using className & import index.css 
/////////////////////////15 google fonts 
///////////////////////////16 inline and internal css 
// we add inline css in html like = <p style="color:red; font-weight:bold "></p>
// but jsx = <p style={{color:"pink", fontWeight:"bold" }} see clearly second word start capital remove -
// internal css = use like a object in style attribute style ={a}  a is object

////////////////////////////////17 project  we understand how to use if else 
// extra , empty string hai=> const p ="";
// extra , empty object => const at ={};  assign value  in javascript = lt.color ="red"  

/////////////////////////////////18 react components ,when return contain jsx so use <></> 
//////////////////////////////////19 project = function also contain javascript code without <></> 
/////////////////////////////////20 import export module =  <Headling/> direct print the answer of only anything return in function ,for component function first letter must be upper case
// 2 tpes of export =1= export default name(name may be difference)
//2= export { name1,name2,name3}(name must be same)
//import defaultname ,{name1,name2,anme3} from ""./filename" 
// <P/> =component,{u()}=function are difference
//////////////////////////////////21 project =  variable.tofixed(value like 2 etc)  it is used to get only limited value after the decimal point  
/////////////////////////////////22 props in reactjs are user made attribute , which contain funstion as a object .props are immuable . props are parent to cild send data
// ruff attribute and className are used like this classNmae="hh"
// use object like=> object.name
// put value in object like=> object.name ="value" 
//////////////////////////////////23 array in reactjs    // array of an object  we use like = a[0].name
//component consider className as a user attribute 
//////////////////////////////////24 map fuction is used call a function like =>{a.map(print)}   
// define the print function and print function return the result at place of {a.map(print)}
//call function ko wahi par likh diya    {a.map((val)=>{
    //  return (<><Cards  
        // imgsrc={val.imgsrc}/>
            // </>)})}
///////////////////////////////////////25    react developer tool download  ,use in component
///////////////////////////////////////26 if elseif in components
////////////////////////////////////////27 ternary operator with components  let Data =()=> { return( userdata==="netflix" ? <Data0/> :<Data1/>)} 
////////////////////////////////////////28 slot machine project =>ruf=> component  return body contain jsx do use <></>
////////////////////////////////////////29  install emoges in vs code 
// extra= <component variable="data"/> 
// extra there  aretwo types of components function and class componenets
// vishal=class  component is not used know a days but very imp = react life cycle also used in class kar lena
//context api karna hai
// props = props are send parent to cild
//state is also used to store data but manage only in component . When the state object changes, the component re-renders.
//function component don't have state or reactlife cycle with the helpof hook we used state and react life cycle in react
//props and state are used to store data ,but props data cannnot be change andstate data can be change
//class props =code step by step hindi youtube 
//this.props.name is used to used props in class
//this.props.children very imp youyube learning never end
//class state =code step by step hindi youtube 

//react life cycle =5 method more bhi hai ye very imp hai
// inke control flow imp hai
//youtube= code step by step

// sequance
// constructor()  
//rendor()  -  load html
//componentDidMount() - use api call
//componentDidUpdate()
//componentwillUnmount() - 
//  will means pehle

// Componentwillmount - use layout effect

///////////////////////////////////////30 event in react ,react hook in function components,with the the help of react hooks we can use state and react life cycle function in function components
// const [count,setcount] = useState(0)
///////////////////////////////////////31 time project with hook
////////////////////////////////////////32 time project using hook and setinterval
//////////////////////////////////////////33 events ,onDoubleClick() , use of hook to change the background color like <div style={{ backgroundColor: g }}> g par hook use kiya , we can create  many hooks in single component like  //1   const [g, setsate] = useState(p)
    //2 const [g1, setsate1] = useState(p)
//import google font on css file = ess video ka nahi hai par imp hai 
////////////////////////////////////////////34 forms in react // 
/* import React, { useState } from "react";
let App = () => {
    let p = "hello"

    const [g, setsate] = useState(p)
    const [g1, setsate1] = useState()

    let apply = (event) => {
    console.log(event.target.value)
         setsate(event.target.value)
    }

    let apply1 = () => {
          setsate1(g)
        }

    return (<>
        <p>hello{g1}</p>
        <input type="text" placeholder="name" onChange={apply}></input>
        <button onClick={apply1} >gettime</button>
    
    </>)
}

export default App; */
// onchange work every time you enter ,work for every single character, tag are also called elements
// event.target.value give value you enter in tag 
//please see the inspect inside component inside see how state work 
// extra= control and uncontrol component related to input element in form ,vishal ne bola use hota hai , controlled = input tag data is managedby usestate ,uncontrolled = input tag data is managed by useref hook or DOM 
////////////////////////////35 inspect inside component inside see how state work  in form are totally different
/*
import React, { useState } from "react";
let App = () => {
        const [g, setsate] = useState("")
    const [n, neww] = useState("")
    const [g1, setsate1] = useState("")
    const [n1, neww1] = useState("")
    let apply = (event) => {
    console.log(event.target.value)
         setsate(event.target.value)
    }

    let apply1 = (event) => {
        event.preventDefault()
          setsate1(g)
          neww1(n)
        }

        let apply0 = (event) => {
         neww(event.target.value)   
            }    

    return (<>
    <form onSubmit={apply1}>
        <p>hello{g1}{n1}</p>
        <input type="text" placeholder="name" onChange={apply}></input>
        <input type="text" placeholder="name" onChange={apply0}></input>
        <button type="submit" >gettime</button>
        </form>
    </>)
}

export default App;
*/

//////////////////////36 multi input form = update kar diya above form ko =also we can use event.tarat.name ,event.taret.placeolder etc

// //////////////////////37 multi input form = update kar diya above form ko = use state as object = const [state,setstate] = useState({
//     name:"",
//     lastname:"",
//     email:"",
//     phone:"",
// })

////////////////////////38 spread  and  destructing in javascript good video

//spread

// let a={
//     b:1,
//     c:2,
//     f:3
// }

// let e={
//     f:6,
//     ...a
// }
// console.log(e)

// //spread

// let j="f"
// let k=7
// let u={
//     f:6,   
//     [j]:k
// }
// console.log(u)

//spread

// let a={
//     b:1,
//     c:2,
//     f:3
// }
// let {b,f}=a
// console.log(b,f)

////////////////////////39 update above form using spread very easy bana diya
///////////////////////40 todo list project
/*
1= App.jsx file
import React, { useState } from "react";
import Todolists from "./Todolists";

let App = () => {
const [inputlist,setinputlist]=useState("")
const [items,setitems]=useState([])

const itemevent=(event)=>{
setinputlist(event.target.value)
}

const listofitem=()=>{
setitems((prevalue)=>{
    return [...prevalue,inputlist]
})
setinputlist("")  
    }

    const deleteitem=(id)=>{
        setitems((prevalue)=>{
            return prevalue.filter((value,index)=>{
                return id!==index
            })
        })
    }

    return (<><div>
        <div>
            <h1>todo</h1>
            <input type="text" placeholder="add  item" onChange={itemevent} value={inputlist}/>
            <button onClick={listofitem}> + </button>
            <ol>    
            {items.map((value,index)=>{
                return <Todolists 
                key={index}
                id={index} 
                text={value}
                onselect={deleteitem}
                />
            })}
            </ol>
        </div>
    </div>
    </>)
}

export default App; 

2= Todolidts.jsx file

import React from "react";

let Todolists=(props)=>{
    return (<>
    <li>{props.text}</li>
    <button onClick={ ()=>{ props.onselect(props.id)}}>remove</button>
    </>)
}

export default Todolists;
*/

///////////////////////////////////////////41   project of value increase decrease in react using hook easy
////////////////////////////////////////////42 vishal ne bola kam aata hai, material ui icon install  phir import then use ,video old ho gaya hai naye tarike aa gaye hai ,
////////////////////////////////////////////43 material ui is a react library ,project using material ui easy
///44 npm is container of codes so that other programers use that code  ,install then import then use , all package we are install handle in package.json 
//45 todo list same as old with the help of material icon
//46 control  + ` to start terminal and close   terminal, npm start on terminal
//47 video old ho gaya hai, naye tarike aagaye hai , // video66 naya hai // code with harry ke tarike se bhai kar sakte hai
//48=1= download extension in vs code= IntelliSense for CSS class names in TML  =it suggest us css class names , mast hai
//48=2=make prtoject interview question answer
// const value ={ question:"what is" , answer:"deepak"}
/* <MyAccordian {...value}/> send object as props , received as const const MyAccordian = ({question ,answer})=>   */
//49 make a project using bootstrap
//extra= dynamic key in object , youtube =steve griggith  let a={ [name]: value } = square bracket me value dalte Hai uski value ke data ki key ban jati Hai =  it is used to generate dynamic key.



//50 project
//51 context api= it is used to directly send data main parent to any child compont
//52 useContext hook = it is used to easy the context api
// hooks never work with class component
//53 useEffect hook =it is used to achieve life cycle method in function component
//54 project of hook easy we document.title ,not document.head.title
//55 axios  it is used in the place of axios , vishal ne ola  use hota hai
//56 react router = it is used to open page without load when you user write like http://about/contact
// and according to user to open that page

// React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL

// BrowserRouter: BrowserRouter is a router implementation that uses the HTML5 history API(pushState, replaceState, and the popstate event) to keep your UI in sync with the URL.
// Routes: Routes component is used to render only the first route that matches the location rather than rendering all matching routes.it is used to switcin betwwen routes.
// Route: This component checks the current URL and displays the component associated with that exact path. All routes are placed within the switch components.


//57 use react router make  nav bar = <a> tag ki jagah <navlink> use
//58 to 65 nai kiya , imp hai kar lena
//66 bootstrap
// 67 react hooks
// one more playlist  search= usereducer thapa

//redux
// redux is used to remove the problem of sending data parent to child  compoment without sending to any intermediate component
// it has 3 things 1=action 2=reducer 3=store
// step 1 = npm install redux react-redux
//install react development tools
//redux is library
// React redux is an advanced state management library for React.

