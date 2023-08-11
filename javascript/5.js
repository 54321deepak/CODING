//nodejs core module
const  fs = require("fs");
 fs.writeFileSync('rrr.txt' , "it is your game");
 fs.appendFileSync('rrr.txt' , "fine it is all fine");
 const a = fs.readFileSync('rrr.txt')
 console.log(a);
``
 const r   = a.toString();
 console.log(r);

 fs.renameSync('rrr.txt' , 'www.txt')