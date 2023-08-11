/*let arr=[1,2,3,4,6,7,8]
let sum=0;
let sum1=0
for(let i=1;i<=arr.length+1;i++){
    sum=sum+i;
}

for(let j=0;j<arr.length;j++){
    sum1=sum1+arr[j];
}

console.log(sum-sum1)
*/

let arr=[1,2,3,4,6,8]
for(let i=1;i<8;i++){
    value=false;
    for(let j=0;j<arr.length;j++){
    if(i == arr[j]){
        value=true;
        break;
    }   
}
if (value == false){
    console.log(i)
}
}