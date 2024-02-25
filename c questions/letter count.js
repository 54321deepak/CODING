// function fun(str) {
//     let arr = str.split(" ")
//     let value = 1
//     let word = ""
//     for (let i = 0; i < arr.length; i++) {
//         let p = 0
//         for (let j = 0; j < arr[i].length; j++) {
//             let some = 0

//             for (let k = 0; k < arr[i].length; k++) {
//                 if (arr[i][j] == arr[i][k]) {
//                     some++
//                 }
//             }
//             if (some > p) {
//                 p = some
//             }
//         }
//         if (p > value) {
//             value = p
//             word = arr[i]
//         }
//     }
//     return word || -1
// }

// console.log(fun("hello apple pie"))

const fun = (str) => {
    let arr = str.split(" ")
    let word = ""
    let count = 0
    for (let i = 0; i < arr.length; i++) {

        let obj = {}
        let maxletter = ""
        let maxcount = 0
        for (let j = 0; j < arr[i].length; j++) {

            let key = arr[i][j]
            if (!obj[key]) {
                obj[key] = 1
            } else {
                obj[key]++
            }
            if (maxletter == "" || obj[key] > maxcount) {
                maxletter = key
                maxcount = obj[key]
            }
        }
        console.log(maxletter, maxcount, obj)
        if (count < maxcount) {
            word = arr[i]
            count = maxcount
        }


    }
    return word
}
console.log(fun("hello apppple apie"))