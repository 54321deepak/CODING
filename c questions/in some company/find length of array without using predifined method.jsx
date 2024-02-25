let a = [1, 2, 4, 6, 4, 9, 3]
let some = 0
for (let i in a) {
    some = parseInt(i)
}
console.log(some + 1)

// However, there is a potential issue with using for...in with arrays. The loop variable i will be a string, not a number. To address this, the parseInt function is used to convert the string i to an integer before adding