let a=[9,15,24,25,27,49,50,89``]
let b=[2,4,6,16,23,25,25,56]
let c= a.length
let d= b.length
let e=c+d;
let arr=[]
for(let i=1;i<=e;i++){
    let k=0
  let l=a[k]
  let m=b[k]
  if(a.length < 1 || b.length < 1 ){
    if(a.length == 0){
      arr.push(b[k])
      b.shift()
   }else if(b.length == 0 ){
     arr.push(a[k])
     a.shift()
   }
  }else{
    if(l<m){
      arr.push(l)
      a.shift()
    }else{
      arr.push(m)
      b.shift()
    }
  }
}

console.log(arr)