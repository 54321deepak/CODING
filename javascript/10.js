const  os = require("os")

console.log(os.arch());
console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());
console.log(os.type());

//  freemem is used show free memory available 
// console.log(os.freemem());
// const freememory = os.freemem();
// console.log(freememory);
// console.log(`${freememory /1024/1024/1024} gb`);

// const totalmemory = os.totalmem();
// console.log(totalmemory);
// console.log(`${totalmemory /1024/1024/1024} gb`);