let obj={
    "i" : 1,
    "v" : 5,
    "x" : 10 ,
    "l" : 50,
    "c" : 100,
    "d" :500,
    "m" : 1000
}

let str="ddll"
let some=0
let str1=""
for(let i=0;i<str.length;i++){
    some =some + obj[str[i]]
}
while(some>999){
    some=some-1000
    str1=str1+ "m"
}

while(some>499){
    some=some-500
    str1=str1+ "d"
}

while(some>99){
    some=some-100
    str1=str1+ "c"
}

while(some>49){
    some=some-50
    str1=str1+ "l"
}

while(some>9){
    some=some-10
    str1=str1+ "x"
}

while(some>4){
    some=some-5
    str1=str1+ "v"
}

while(some>0){
    some=some-1
    str1=str1+ "i"
}

console.log(str1)
