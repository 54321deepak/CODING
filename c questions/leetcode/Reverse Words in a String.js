// var reverseWords = function (s) {
//     return s.split(" ").reverse().filter(w => w !== "").join(" ");
// };
// console.log(reverseWords("  the sky is blue   "))


var reverseWords = function (s) {
    let i = 0, l = s.length
    let ans = ""

    while (i < l) {
        let temp = ""

        while (s[i] == " ") {
            i++
        }

        while (s[i] != " " && i < l) {
            temp = temp + s[i]
            i++
        }


        if (temp.length != 0) {
            if (ans.length === 0) {
                ans = temp
            } else {
                ans = temp + " " + ans
            }
        }


    }
    return ans
}

console.log(reverseWords("  the sky is blue   "))