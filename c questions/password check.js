function is(str) {
  let l = str.length
  let a = str[0]
  let b = str[l - 1]
  let c = "_"
  let value = true

  let z = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_"
  if ((l >= 4 && l <= 24) && (a.match(/[a-z]/i)) && (!c.includes(b))) {
    // i = 	Perform case-insensitive matching

    // Case insensitive is a term used in computer science to describe a situation where uppercase and lowercase letters are treated same

    for (let i = 0; i < l; i++) {
      if (!z.includes(str[i])) {
        value = false
        break
      }
    }
    if (value) {
      return value
    }
  }
  return false
}
console.log(is("Deepak123_0"))