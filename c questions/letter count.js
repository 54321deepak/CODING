function fun(str){
    let arr=str.split(" ")
    let value=1
    let word=""
    for(let i=0;i<arr.length;i++){
             let p=0
        for(let j=0;j<arr[i].length;j++){
            let some=0
            
            for(let k=0;k<arr[i].length;k++){
                if(arr[i][j]== arr[i][k]){
                    some++
                }
            }
            if(some>p){
                p=some
            }
        }   
        if(p>value){
        value=p
        word=arr[i]
        }   
     }
     return word || -1
}

console.log(fun("hello apple pie"))