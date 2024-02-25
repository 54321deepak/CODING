// we have to  remove 2 letter in strin if two are same usin recusion

let a = "deepak deeepak ello abcd"
let arr = a.split("")
let k = a.length
let i = 0
let p = []
function f() {
    if (arr[i] === arr[i + 1]) {
        // arr.shift()
        // arr.shift()
        // k--
        // k--
        i = i + 2
    }
    else {
        p.push(arr[i])
        // arr.shift()
        // k--
        i++
    }

    if (i < k) {
        f()
    }

}
f()
let str = p.join("")
console.log(str)

// let a = "deepak deeepak ello abcd"
// let arr = a.split("")
// let k = a.length
// let i = 0
// let p = []

// while (i < k - 1) {
//     if (arr[i] !== arr[i + 1]) {
//         p.push(arr[i])
//         i++
//     } else {
//         i = i + 2
//     }
// }
// console.log(p.join(""))