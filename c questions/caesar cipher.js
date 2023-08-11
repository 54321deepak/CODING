function fun(str,num){
    let arr = str.split("")
    let b="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    console.log(arr)
  for(let j=0;j<num;j++){
    
            for (let i = 0; i < str.length; i++) {
        
                if (arr[i].match(/[a-z]/)) {
                    if (arr[i] === "z") {
                        arr[i] = "a";
                        continue
                    }
  
                    arr[i] = String.fromCharCode(arr[i].charCodeAt(0) + 1);
                }else if(b.includes(arr[i])){
                        if (arr[i] === "Z") {
                            arr[i] = "A";
                            continue
                        }
      
                        arr[i] = String.fromCharCode(arr[i].charCodeAt(0) + 1);
                        arr[i]=arr[i].toUpperCase()
                }
            }
        }
        return arr.join("");
    
}
console.log(fun("abcD 9*df",237))