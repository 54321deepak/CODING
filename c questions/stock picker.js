function fun(arr) {
    let profit = 0
    for (let i = 0; i < arr.length - 1; i++) {
        let big = 0
        for (let j = i + 1; j < arr.length; j++) {
            // if (arr[j] > arr[i]) {
            //     if (arr[j] > big) {
            //         big = arr[j]
            //     }
            // }
            let k = arr[j] - arr[i]
            if (k > big) {
                big = k
            }

        }
        // let value = big - arr[i]
        if (big > profit) {
            profit = big
        }

    }
    if (profit === 0) {
        return -1
    } else if (profit > 0) {
        return profit
    }
}

console.log(fun([23, 63, 43, 2, 64]))


//ye galat hai
// let a=[23, 63, 43, 2, 64,3,362]
// let min = Math.min(...a)
// let index= a.indexOf(min)
// let arr = a.slice(index+1)
// let max = Math.max(...arr)
// console.log("Welcome to Programiz!",max-min);