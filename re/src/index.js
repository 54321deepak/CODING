// var React=require('react')
import react from 'react';
// var ReactDOM= require('react-dom')
import ReactDOM from 'react-dom';

/*
ReactDOM.render(
    <div>       
<h1>hello world</h1>
<p>ok ok</p>
    </div>
,
document.getElementById('root')
)


/*
ReactDOM.render(
    [      
<h1>hello world</h1> ,
<p>ok ooook</p>
    ]
,
document.getElementById('root')
)
*/

/*
ReactDOM.render(
    <React.Fragment>
        <h1>hello world</h1>
        <p>ok ok</p>
    </React.Fragment>
    ,
    document.getElementById('root')
)
*/

/*
ReactDOM.render(
    <>
        <h1>hello world</h1>
        <p>ok pok</p>
    </>
    ,
    document.getElementById('root')
)

*/

/* 
ReactDOM.render(
    <>
    <h1>hello world</h1>
    <p>ok ok</p>
    <ol>
    <li>deepak</li>
    <li>vishal</li>
            <li>soniya</li>
        </ol>
    </>
    ,
    document.getElementById('root')
    )
    */

/*
const a= "hello fello"
ReactDOM.render(<>
    <h1>hello world {a}</h1>
    <h1>{2+3}</h1>
    /*
    // this type of thing not work
    <h1>okokokokokokokokokokok
    {
        if(2<3){
            console.log("true")
        }else
        { console.log("false")}
    }
    </h1>
    */
// </>
// ,
// document.getElementById('root')
// )
// */

/*
const a="thapa"
const b=" technical"
ReactDOM.render(<>
<h1>hello world {a + b}</h1>
<h1>hello world {`${a} hhhh ${b} `}</h1>
 
</>,
document.getElementById('root')
)

*/


/*
let today = new Date().toLocaleDateString();
let today1 = new Date().toString();
let today2 = new Date().toLocaleTimeString()

ReactDOM.render(  <> 
<h1>Time= {today} </h1>
<p>  {today1}  </p>
<p>  {today2}  </p>
</>,
document.getElementById("root")
)

*/

/*

const image="https://picsum.photos/200/300.jpg"
const image1="https://picsum.photos/200/300.jpg"
const links="https://thapatechnical.com"

ReactDOM.render(<> <h1 contentEditable="true">ok</h1>
<img src="https://picsum.photos/200/300.jpg"  alt="no image found"/>
<a href={links}   target="_b">
<img src={image}  alt="no image found"/>
</a>
</>,
document.getElementById("root")
)

*/

/*
// css file also check
import "./index.css"

ReactDOM.render(  <> 
    <h1 className="kartos">Time ok hai </h1>
    <div className="partos">
    <p>mymymymmymymy</p>
    </div>
    </>,
    document.getElementById("root")
    )
    
    */

/*
// css file &  html file also check
import "./index.css"
 
ReactDOM.render(  <> 
 <h1 className="kartos">Time ok hai </h1>
 <div className="partos">
 <p>mymymymmymymy</p>
 </div>
 </>,
 document.getElementById("root")
 )
 
 */
/*
      import "./index.css"

   ReactDOM.render(  <> 
    <h1 style={{color:"red" , textTransform:'capitalize', textAlign:"center"}}>Time ok hai </h1>
    <div className="partos">
    <p>mymymymmymymy</p>
    </div>
    </>,
    document.getElementById("root")
    )
*/

/*

import "./index.css"

const heading={
    color:"red" ,
    textTransform:'capitalize',
    textAlign:"center"
}

ReactDOM.render(  <> 
<h1 style={heading}>Time ok hai </h1>
    <div className="partos">
    <p>mymymymmymymy</p>
    </div>
    </>,
    document.getElementById("root")
    )
    
    */

/*
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

ReactDOM.render(  <> 
    <h1>hello sir, <span style={cssstyle}>  {greeting} </span>  </h1>
        </>,
        document.getElementById("root")
        )
    
        */

/*
video 19 cheack heading.jsx  

import Heading from './Heading';
import Para from './Para' 

ReactDOM.render(  <> 
    //  <Heading> </Heading> 
    <Heading/>
    <Para/>
      </>,
        document.getElementById("root")
        )
        */

/*
//  video 19 + para.jsx + heading.jsx +App.jsx
import App from './App' 

ReactDOM.render(<>
<App/>
</>
,
document.getElementById("root")
)
 

*/
/*

// video 20 + app.jsx

import App from './App'

ReactDOM.render(<App/>, document.getElementById("root")
)

*/

/*

//video 21 + app.jsx
import k,{b,c,d} from './App'

ReactDOM.render(<>{k},{b},{c()},{d()}</>, document.getElementById("root")
)

*/

/*

// video 22+ index.jsx
import {add,sub,mul,div} from './App'

ReactDOM.render(<><ul>
    <li>sum of two number is {add(2,2)}</li>
    <li>sub of two number is {sub(2,3)}</li>
    <li>multiple of two number is {mul(3,3)}</li>
    <li>divide of two number is {div(3,4)}</li>
</ul>
</>, 
document.getElementById("root")
)
*/

/*
// video 23+ index.js +cards.jsx
import Cards from "./Cards"

ReactDOM.render(<>
<Cards  
imgsrc="https://picsum.photos/200/300?grayscale"
title="a netlix original series"
sname="dark"
link="www.netflix.com"
/>
<Cards  
imgsrc="https://picsum.photos/200/300?grayscale"
title="a netlix original series"
sname="dark"
link="www.netflix.com"
/>
<Cards  
imgsrc="https://picsum.photos/200/300?grayscale"
title="a netlix original series"
sname="dark"
link="www.netflix.com"
/>
<Cards  
imgsrc="https://picsum.photos/200/300?grayscale"
title="a netlix original series"
sname="dark"
link="www.netflix.com"
/>
</>,
document.getElementById("root")
)
*/

/*

//  vide0 25 +sdata.jsx + cards.jsx

import Cards from "./Cards"
import Sdata from './sdata';

ReactDOM.render(<>
    <Cards  
    imgsrc={Sdata[0].imgsrc}
    title={Sdata[0].title}
    sname={Sdata[0].sname}
    link={Sdata[0].link}
    />
    <Cards  
    imgsrc={Sdata[1].imgsrc}
    title={Sdata[1].title}
    sname={Sdata[1].sname}
    link={Sdata[1].link}
    />
    <Cards  
    imgsrc={Sdata[2].imgsrc}
    title={Sdata[2].title}
    sname={Sdata[2].sname}
    link={Sdata[2].link}
    />
    <Cards  
    imgsrc={Sdata[3].imgsrc}
    title={Sdata[3].title}
    sname={Sdata[3].sname}
    link={Sdata[3].link}
    />
    </>,
    document.getElementById("root")
    )
    
    */

/*

//  vide0 25,26 +sdata.jsx + cards.jsx

import Cards from "./Cards"
import Sdata from './sdata';

// function ncard(val){
// // console.log(val)
//  return(  <Cards  
//     imgsrc={val.imgsrc}
//     title={val.title}
//     sname={val.sname}
//     link={val.link}
//     />)
// }

ReactDOM.render(<>
    {Sdata.map(function ncard(val){
// console.log(val)
 return(  <Cards  
    imgsrc={val.imgsrc}
    title={val.title}
    sname={val.sname}
    link={val.link}
    />)
}
)}
    </>,
    document.getElementById("root")
    )
*/

//  27 video onvideo 

/*
// video 23 ,25,26,28+ index.js +cards.jsx

import Cards from "./Cards"
import Sdata from './sdata';

function ncard(val){
// console.log(val)
 return(  <Cards
    key ={val.id}  
    imgsrc={val.imgsrc}
    title={val.title}
    sname={val.sname}
    link={val.link}
    />)
}

ReactDOM.render(<>
    {Sdata.map(ncard)}
    </>,
    document.getElementById("root")
    )
    
    
    // see full video 28
    */