let arr=[1,3,2,5,2,5,67,6,6,]
let arr1=[]
let some=0
for(let i=0;i<arr.length;i++){
    if(!arr1.includes(arr[i])){
        arr1.push(arr[i])
    }
}
let k =arr.length -arr1.length
console.log(k)