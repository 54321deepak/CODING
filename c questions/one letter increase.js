// // mindpath company questions
// function nextletter(str){
//     let obj={
//         "a":"b",
//         "b":"c",
//         "c":"d",
//         "d":"e",
//         "e":"f",
//         "f":"g",
//         "g":"h",
//         "h":"i",
//         "i":"j",
//         "j":"k",
//         "k":"l",
//         "l":"m",
//         "m":"n",
//         "n":"o",
//         "o":"p",
//         "p":"q",
//         "q":"r",
//         "r":"s",
//         "s":"t",
//         "t":"u",
//         "u":"v",
//         "v":"w",
//         "w":"x",
//         "x":"y",
//         "y":"z",
//         "z":"a",
//     }
//     let ans = ""
//     for (let i = 0; i < str.length; i++) {
//         if(obj[str[i]]){
//            k= obj[str[i]]
//             if(k== "a" || k == "e" || k=="i" || k == "o" || k=="u"){
//              k=k.toUpperCase()
//              }
//         ans += k
//         }else{
//             ans += str[i]
//         }
//         // if(str[i].match(/[a-z]/i) ){
//         //     let k=object[str[i]]
//         //     if(k== "a" || k == "e" || k=="i" || k == "o" || k=="u"){
//         //          k=k.toUpperCase()
//         //     }
//         //     str1=str1+ k
//         // }else{
//         //     str1=str1+str[i] 
//         // }
//     }
//     return ans
// }
// let str="hdllo* 3"
// console.log(nextletter(str))

// // aeiou wala bhi hogaya = mindpath company question

function letterChanges(str) {
    let arr = str.split("")
    for (var i = 0; i < str.length; i++) {

        if (arr[i].match(/[a-z]/)) {
            if (arr[i] === "z") {
                arr[i] = "A";
                continue
            }

            arr[i] = String.fromCharCode(arr[i].charCodeAt(0) + 1);
            if (arr[i] == "e" || arr[i] == "i" || arr[i] == "o" || arr[i] == "u") {
                arr[i] = arr[i].toUpperCase();
            }
        }
    }
    return arr.join("");
}
console.log(letterChanges("abcdefghijklmnopqrstuvwxyz"));
console.log(letterChanges("hdllo * 3"));

