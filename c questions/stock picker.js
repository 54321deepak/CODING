function fun(arr){
    let profit=0
for(let i=0;i<arr.length -1;i++){
   let big=0
    for(let j=i+1;j<arr.length -i;j++){
       if(arr[j]>arr[i]){
        if(arr[j] > big){
        big=arr[j]
       }   
    }
    }   
    let value=big-arr[i]
    if(value>profit){
        profit=value
    }

}
if(profit === 0){
    return -1
}
}

console.log(fun([63,43,2,1]))