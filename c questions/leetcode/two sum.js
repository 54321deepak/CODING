// find two value  in  array whose sum is equal to to target dont repeat same index and return only sindex

//brute force
// var twoSum = function(nums, target) {
//     for(let i=0 ; i< nums.length -1 ;i++){
//      for(let j=i+1 ; j< nums.length  ;j++){
//     if(nums[i] + nums[ j] === target){
//         console.log("test",i,j)
//         return [i,j]
//     }
// }
// }
// };


//hashing method
// var twoSum = function(nums, target) {
//     const numToIndex = new Map();
// for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i];
//     if (numToIndex.has(complement)) {
//         return [numToIndex.get(complement), i];
//     }
//     numToIndex.set(nums[i], i);
// }
// };


var twoSum = function (nums, target) {
    const numToIndex = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

         if (numToIndex[complement] !== undefined) {  // undefined ka reason hai   because of zero  // no need of undined 
            return [numToIndex[complement], i];
        } 
        numToIndex[nums[i]] = i;
    }
};

//2pointer approach  // greddy apporach
// 2pointer approach  = it is used in array and object  and  when they in sorted order .
// their are two ways to start pointer
// 1 = both pointer start from same point
//  2 = one  pointer in  start and another in end 

// var twoSum = function(nums, target) {
    
//     const numsWithIndices = nums.map((num,index) => ({num,index}));

//     numsWithIndices.sort((a,b) => a.num - b.num);
// console.log(numsWithIndices)

//     let left = 0;
//     let right = numsWithIndices.length - 1;

//     while (left < right){
     
//         let sum = numsWithIndices[left].num + numsWithIndices[right].num;

      
//         if(sum === target){
//             return [numsWithIndices[left].index, numsWithIndices[right].index];
//         }

       
//         if(sum < target){
//             left++;
//         } 
     
//         else {
//             right--;
//         }
//     }
//     return null;
// };