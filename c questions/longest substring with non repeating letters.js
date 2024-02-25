// return length of longest substring with non repeated letters means abc or bca or cab in this question no letters repeat . 

//bestspeers
function f(str) {
        let arr = str.split("");
        let length = 0;
        let p = [];
        for (i = 0; i < arr.length; i++) {
                let arr1 = [];
                arr1.push(arr[i]);
                for (j = i + 1; j < arr.length; j++) {
                        if (!arr1.includes(arr[j])) {
                                arr1.push(arr[j]);
                        } else if (arr1.includes(arr[j])) {
                                break;
                        };
                };
                let k = arr1.length;
                if (k > length) {
                        length = k;
                        p = arr1;
                };
        };
        console.log(p);
        return length;
}
console.log(f("abcabcbb"));