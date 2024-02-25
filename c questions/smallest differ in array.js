//smallest difference is 1 in array ,arr=[1,2,5,6,8,9]  2-1=1


//very easy solution smallest difference  in array

var minimumAbsDifference = function (arr) {
    let min = Infinity;


    arr = arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length - 1; i++) {
        const minus = arr[i + 1] - arr[i];
        if (minus < min) {

            min = minus;
        }
    }
    return min;
};
console.log(minimumAbsDifference([5, 1, 2, 4, 5, 6]));