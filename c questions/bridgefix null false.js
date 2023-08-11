let a=[false,"",0,null,5,-2]
let len= a.length
let arr=[]
for(let i=0 ;i<len;i++){
    if(a[i]>0 || a[i]<0){
        arr.push(a[i])
    }
}
console.log(arr)