
//complete json in nodejs
const fs = require('fs')
const  biodata = {
        name : "deepak",
    age : 33, 
    channel : " ok ok"
}
/*
console.log(biodata.name)

// object convert to json

const jsondata = JSON.stringify(biodata);
console.log(jsondata)
console.log(jsondata.channel)   // we can not call json by use .


//json convert to object

const  objdata = JSON.parse(jsondata)
console.log(objdata.name)

*/

//  convert object  into json

const jsondata = JSON.stringify(biodata)


// create new file
fs.writeFile("json1.json",jsondata,  (err) =>{
    console.log("done");
})
 
// readfile
fs.readFile("json1.json","utf-8",(err,data)=>{
    console.log(data);
    //convert json data into obj 
    const newdata = JSON.parse(data)
    console.log((newdata));
})

