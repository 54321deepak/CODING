function fun(num){
let num1=num.toString()
let num2=num1.split("")
for(let i=num2.length-1;i>=1;i--){
    if(num2[i]>num2[i-1]){
        let k=num2[i-1]
        num2[i-1]=num2[i]
        num2[i]=k
        let p=num2.length
        let temp = num2.splice(i,p-i).sort()
       // ye galat hai tarika array me / return dekh / num2=num2+temp
        num2=num2.concat(temp) //concat is used for array only
        return num2
}
}
}

console.log(fun(123453))