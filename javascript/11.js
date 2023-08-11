const path = require("path");

console.log(path.dirname('D:/coding/javascript/11.js'));
console.log(path.extname('D:/coding/javascript/11.js'));
console.log(path.basename('D:/coding/javascript/11.js'));
// console.log(path.parse('D:/coding/javascript/11.js'));
/*
const mypath = console.log(path.parse('D:/coding/javascript/11.js'));
ye galat hai console.log print kare ga return nahi karega
*/
const mypath = path.parse('D:/coding/javascript/11.js')
console.log(mypath.name);

console.log(mypath.root);