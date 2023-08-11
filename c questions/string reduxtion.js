let str="abccba"
let res=str.length+1
while(res>str.length){
    res=str.length
    str=str.replace("ab","c")
    str=str.replace("ba","c")
    str=str.replace("bc","a")
    str=str.replace("cb","a")
    str=str.replace("ca","b")
    str=str.replace("ac","b")
}
console.log(str)