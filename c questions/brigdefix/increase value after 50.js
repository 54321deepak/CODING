// increase next value if value is greater than 50

let a = [3, 5, 35, 66, 36, 35, 55, 33, 3, 50, 86, 45, 51]

let b = []

let i = 0
while (i < a.length) {
    if (a[i] > 50) {
        b.push(i)
    }

    i++
}

let j = 0
while (j < b.length) {


    let k = b[j]
    console.log(k)
    if (k !== a.length - 1) {
        a[k + 1] = 2 * a[k + 1]

    }

    j++
}



console.log(a)