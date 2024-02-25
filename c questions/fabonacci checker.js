//check number belong to fibonacci series or not

function fun(num){
    let a=0,b=1
if(a=== num || b ===num){
    return true
}
let c=0
while(c<num){
  c=a+b
  a=b
  b=c
  
  if(c==num) {
    return true
  }
}

return false
}
console.log(fun(4))