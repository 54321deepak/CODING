function substr(str) {
    if (str.length < 1) {
        return " "
    }

    let longest = ""
    for (let i = 0; i < str.length; i++) {
        let a = findstr(str, i, i)
        let b = findstr(str, i - 1, i)
        if (a.length > longest.length) {
            longest = a
        }

        if (b.length > longest.length) {
            longest = b
        }
    }
    return longest
}
function findstr(str, left, right) {
    let i = 0

    // while ( str[left - i] === str[right + i]) {
    //     console.log(str[left - i], str[right + i])
    //     i++
    // }

    while (str[left - i] && str[left - i] === str[right + i]) {
        console.log(str[left - i], str[right + i])
        i++
    }
    i--

    return str.slice(left - i, right + i + 1)
}

let str = "sgtyuyioiabcdcbagt";
console.log(substr(str))