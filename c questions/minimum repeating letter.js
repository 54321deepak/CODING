//return 1 because it comes 3 times and 2 comes 5 times 
//bestspeers
function f(arr) {
    let minimum = 0;
    let some = 0
    let arr1 = []
    for (i = 0; i < arr.length; i++) {
        let value = 0
        if (!arr1.includes(arr[i])) {
            arr1.push(arr[i])
            for (j = 0; j < arr.length; j++) {
                if (arr[i] === arr[j]) {
                    value++
                }
            }
        }
        if (value !== 0) {
            if (i === 0) {
                minimum = value;
                some = arr[i]
            } else {
                if (minimum > value) {
                    minimum = value
                    some = arr[i]
                }
            }
        }
    }
    console.log(minimum)
    return some
}
console.log(f([2, 2, 1, 1, 1, 2, 2, 2, 2, 2]))