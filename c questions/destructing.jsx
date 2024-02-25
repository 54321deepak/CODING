//thapa technical

//array destruction all us to assign values of array to variable
// array destructing me name impotant nahi hai but sequence important hai

let arr = [1, 2, 3, 4, 5]

//old way
// let a = arr[0]
// let b = arr[1]
// let c = arr[2]
// let d = arr[3]
// let e = arr[4]

// new way
// let [a, b, c, d, e] = arr
// console.log(a, b, e)

// let a, b, c, d, e
// [a, b, c, j] = arr
// console.log(a, b, c, j)

// let a, b, c, d, e = 0;
// [a, b, c, d, e] = arr
// console.log(a, b, e)

//sequence is important
// let [a, , , , e] = arr
// console.log(a, e)

//object destructing

let obj = {
    a: 1,
    b: 2,
    c: 3
}

// old way
// console.log(obj.a)

//new way
// let { a } = obj
// console.log(a)

//in object  are important

// name means using same names of object other name give error
// let { a,b,c } = obj
// console.log(a)
// here we are able to use only a,b,c in same sequence

// error dega ye
// let a, b, c;
// { a, b, c } = obj

// let { c, ...rest } = obj
// console.log(c, rest)
