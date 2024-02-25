
//bestspeers
function f(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        if (arr[i] + arr[j] === value) {
          // return always return one value so we make a array to return
          const k = [arr[i], arr[j]];

          return k;
        };
      };
    };
  };

};

console.log(f([1, 4, 9, 4, 6, 8, 2], 8));
