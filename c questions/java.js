// function is(str) {
//     let l=str.length
//     let a=str[0]
//     let b=str[l-1]
//     let c="_"
//     let value=true

//     let z="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_"
//     if((l>=4&& l<=24) && ( a.match(/[a-z]/i)) && ( !c.includes(b)) ){
//       for(let i=0;i<l;i++){
//             if(!z.includes(str[i])){
//               value=false
//               break
//             }
//            }
//            if(value === true){
//              return value
//            } 
//       }
//   return false
//     }
// console.log(is("deepak123_0"))



// function LongestWord(sen) { 
//     var v = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
//         lng = '',
//         lngn = 0,
//         ss = sen.split(' ');
//         console.log(ss)
//     for (var i = 0; i < ss.length; i++) {
//       var c = 0, s = '';
//       for (var j = 0; j < ss[i].length; j++) {
//         console.log(ss[i][j])
//         if (v.indexOf(ss[i][j]) >= 0) {
//           c++;
//           s += ss[i][j];
//         }
//       }
      
//       if (c > lngn) {
//         lngn = c;
//         lng = s;
//       }
//     }
//     return lng; 
              
//   }
//      let sen='aaaaaa deepak'

//   console.log(LongestWord(sen)  )


//or

function LongestWord(sen) { 
  var v = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
      k1=0,
      c1 = 0,
      ss = sen.split(' ');
  for (var i = 0; i < ss.length; i++) {

let c= ss[i].length
let k=ss.indexOf(ss[i])
    
if (c > c1) {
  c1 = c;
  k1 = k;
}
}
  return ss[k1]
            
}
   let sen='aaaaaa deyepak difjesifudi'

console.log(LongestWord(sen)  )