import React from "react";
import Cards from "./App";
import a from "./Heading";


let Data1 =()=>{
    return (<><Cards  
        imgsrc={a[0].imgsrc}
        title={a[0].title}
        sname={a[0].sname}
        link={a[0].link}
        /></>)
     }

    export {Data1}