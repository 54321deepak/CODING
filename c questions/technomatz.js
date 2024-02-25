/* teachnomatz company question */
/* pass array , make arrays of 3 values and return  maximum values */

function fun(arr) {
    let arr1 = []
    let arr2 = []
    for (let i = 0; i < arr.length; i++) {
        arr1.push(arr[i])
        if (arr1.length == 3) {
            console.log(arr1)
            arr2.push(Math.max(...arr1))
            arr1 = []
        }
    }
    return arr2
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(fun(arr))