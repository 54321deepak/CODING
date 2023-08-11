// event  is not imp
//create event


// EventEmitter is a class    
const EventEmitter  = require("events");


const event = new EventEmitter();

/*
event.on('satmy name',()=>{
    console.log(" hahah");
})

event.on('satmy name',()=>{
    console.log(" hahah1");
})

event.on('satmy name',()=>{
    console.log(" hahah2");
})



event.emit('satmy name');

*/

event.on("hero",(sc,msg)=>{
    console.log(`mu mi ${sc} and ${msg}`)
})


event.emit("hero",200,"ok")