function fun(arr){
    let max1=0
    let max2=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max1){
         max2=max1
         max1=arr[i]
        }else if(arr[i]>max2 && arr[i] < max1){
        max2=arr[i]
        }
    }
    return max2
}
let arr=[1,3,6,8,4,3,7]
console.log(fun(arr))