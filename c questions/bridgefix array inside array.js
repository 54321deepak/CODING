// let array = [1, 2, 3, 4, [1], [11, [1]],[1,2]]
// let len = array.length
// let some = 0;
// for (let i = 0; i < len; i++) {
//     if (typeof (array[i]) == "object") {
//         some++
//         let k = array[i]
//         let p = k.length
//         for (let j = 0; j < p; j++) {
//             if (typeof (k[j]) == "object") {
//                 some++
//             }
//         }
//     }
// }
//     console.log(some)

    /*function g(array,some) { 
    
    for (let i = 0; i < array.length; i++) {
        if (typeof (array[i]) == "object") { 
            some++
            g(array[i],some)
        }
    }
    return some      
} 
let some = 0
 let array = [1, 2, 3, 4, [1,[1,[1]]], [11],[1],[1,[1]]]
    console.log(g(array,some));  
  */  


// write
function ga(array) { 
    for (let i = 0; i < array.length; i++) {
        if (typeof (array[i]) == "object") {
            
            console.log(array[i])
            some++
            console.log(some)
            ga(array[i])
        }
    }
    return some
}  
let some=0
let array = [1, 2, 3, 4, [1,[1,[1]]], [11],[1],[1,[1]]]
console.log(ga(array));

// function g(arrayi) { 
//     let some = 0;
//     function ga(array,) { 
    
//         for (let i = 0; i < array.length; i++) {
//             if (typeof (array[i]) == "object") {
                
//                 console.log(array[i])
//                 some++
//                 console.log(some)
//                 g(array[i])
//             }
//         }
//         return some
//     }

//     ga(arrayi)
//     return some;
// } 


//  let array = [1, 2, 3, 4, [1,[1,[1]]], [11],[1],[1,[1]]]
//  console.log(g(array));  
  