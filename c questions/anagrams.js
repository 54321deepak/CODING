function fun(str1, str2) {
    let value = true
    let a = str1.split("").sort().join("").toLowerCase()
    let b = str2.split("").sort().join("").toLowerCase()
    console.log(a, "s", b)
    if (a === b) {
        value = true
    } else {
        value = false
    }
    return value
}
console.log(fun("abcd", "a bdc"))