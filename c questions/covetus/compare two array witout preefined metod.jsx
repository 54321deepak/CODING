// Length is not a method is not predefined metod 
//Parentheses ( )


// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let res = true
// let l = 0

// if (a.length > b.length) {
//     l = a.length
// } else {
//     l = b.length
// }

// for (let i = 0; i < l; i++) {
//     if (a[i] !== b[i]) {
//         res = false
//         break;
//     }
// }
// console.log(res)


let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1]
let b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let p = ""
let q = ""

for (i = 0; i < a.length; i++) {
    p = p + a[i]
}

for (i = 0; i < b.length; i++) {
    q = q + b[i]
}

if (p === q) {
    console.log(true, p, q)
} else {
    console.log(false, p, q)
}
