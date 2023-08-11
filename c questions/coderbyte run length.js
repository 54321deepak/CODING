// function fun(str){
//     let str1=""
//     while(i<str.length){
//         let k =fun1(str,i,i)    
//         let value=str[i]
//         str1 = str1+ k
//         str1 = str1+ value
//         i++
//     }
//     return str1
// }

// function fun1(str,z,z){
//     let p=1
// while(str[z]=== str[z+1]){
// p++
// z++
// i++
// }
// return p
// }
// let i=0
// let str="wwwggoqq"
//  console.log(fun(str))

 // or

 function fun(str){
    let str1=""
    let count =1
    for(let i=0;i<str.length;i++){
        if(str[i] === str[i+1]){
            count ++
        }else{
         str1= str1 + count + str[i] 
         count =1
    }
}
    return str1
}

  let str="wwwggoqq"
 console.log(fun(str))




