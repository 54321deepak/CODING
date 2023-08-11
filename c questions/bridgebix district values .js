let arr=[1,-2,-2,3,4,5,6,5]
let len=arr.length
let a=[]
for(let i=0;i<len;i++){
    let some =0;
    for(let j=0;j<i;j++){
     if(arr[i]==arr[j]){
        some++;
       break;
    }
     }
      if(some ==0){
     a.push(arr[i])
    }
}
console.log(a)
