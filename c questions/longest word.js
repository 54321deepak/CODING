// function LongestWord(sen) {
//     var v = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
//       lng = '',
//       lngn = 0,
//       ss = sen.split(' ');
//     console.log(ss)
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
//   let sen = 'aaaaaaa deepaka'

//   console.log(LongestWord(sen))


//or

function LongestWord(sen) {

    k1 = 0,
        c1 = 0,
        ss = sen.split(' ');
    for (var i = 0; i < ss.length; i++) {

        let c = ss[i].length
        let k = ss.indexOf(ss[i])

        if (c > c1) {
            c1 = c;
            k1 = k;
        }
    }
    return ss[k1]

}
let sen = 'aaaaaa deyepak difjesifudi'

console.log(LongestWord(sen))