// mindpath comapny question
function fun(arr){
let sum=0
let i=0;

while(i<arr.length){
if(arr[i]==6){
    for(let j=i;j<arr.length;){
     i++
     if(arr[i]==7){
        i++
        break
     }
    }
}
if(i == arr.length){
    break
}
sum=sum+arr[i]
i++
}
console.log(sum)
}
let  y=[1,9,2,6,3,4,5,9,8,9,0,7,9]
fun(y)