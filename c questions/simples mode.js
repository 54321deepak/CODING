/*Using the JavaScript language, have the function SimpleMode(arr) 
take the array of numbers stored in arr and return the number that 
appears most frequently (the mode). For example: if arr contains 
[10, 4, 5, 2, 4] the output should be 4. If there is more than one 
mode return the one that appeared in the array first (ie. [5, 10, 10, 6, 5]
should return 5 because it appeared first). If there is no mode return -1. The array will not be empty. */

function fun(arr) {
    let count = 0
    let value = 0
    for (let i = 0; i < arr.length; i++) {
        let count2 = 0
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                count2++
            }
        }
        if (count2 > count) {
            count = count2
            value = arr[i]
        }
    }
    if (count > 1) {
        return value
    }
    return -1
}
console.log(fun([5, 10, 10, 6, 5])) 