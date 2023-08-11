function f(i){
    if(i==1){
        return 1
    }else{
      return  i* f(i-1)
    }
}
let i=5
console.log(f(i))

