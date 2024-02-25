//code step by step
function fun(str) {
    let obj = {}
    let maxletter = ""
    let maxcount = 0   //  it is important
    for (let i = 0; i < str.length; i++) {
        let key = str[i]
        if (!obj[key]) {
            obj[key] = 1
        } else {
            obj[key]++
        }
        if (maxletter == "" || obj[key] > maxcount) {
            // console.log(obj[key], i)
            maxletter = key
            maxcount = obj[key]
        }
    }
    console.log(obj)
    return (maxletter)
}
console.log(fun("hello apple pppie"))