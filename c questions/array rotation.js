function fun(arr) {
    let v = arr[0]

    if (v > 0) {
        for (let i = 0; i < v; i++) {
            let r = 0
            let k = arr[0]
            for (let i = 0; i < arr.length - 1; i++) {
                arr[i] = arr[i + 1]
            }
            let p = arr.length - 1
            arr[p] = k
        }
    } else if (v < 0) {
        for (let i = 0; i > v; i--) {
            let r = arr.length - 1
            let k = arr[r]
            for(let j=arr.length-2;j>=0;j--){
                         arr[j+1]=arr[j]   
            }
            arr[0] = k
        }
    }

    return arr
}

console.log(fun([-9, 1, 4, 6, 7, 3]))