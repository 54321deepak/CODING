//mindpath  company question  
function fun(num1,num2){
let value=""
let a=num1%10
let b=num2%10
if(a === b){
value="true"
}else if(a !==b){
value='false'
}
return value
}
console.log(fun(2,12))
