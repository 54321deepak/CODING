// mindpath company question
function fun(str){
let arr=[]
for(let i=0;i<str.length;i++){
    if(str[i]=="("){
   arr.push(str[i])     
    }else if(str[i] == ")"){
        if( arr.length == 0){
            return 0
        }else{
            arr.pop()
        }
    }
}
return arr.length == 0 ? 1 : 0 
}
let str="agts(gjs)hshjs"

console.log(fun(str))

//coderbyte youtube channel very easy
