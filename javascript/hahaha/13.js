// i try very much but chalk is not working
// complete npm 
//1 =npm init
//2 npm i chalk
// chalk is used to add stying in vs code
//const chalk = require("chalk");
//console.log(chalk.blue("hello"))

//validator is used to check email is true or false

var validator = require('validator');
const res =validator.isEmail('foo@bar.com');
console.log(res);
