// var merge = function (nums1, m, nums2, n) {

//     nums1.splice(m)

//     for (i = 0; i < n; i++) {
//         nums1.push(nums2[i])
//     }

//     nums1.sort((a, b) => {
//         return a - b
//     })
// };

// var merge = function (nums1, m, nums2, n) {

//     for (let i = m, j = 0; j < n; i++, j++) {
//         nums1[i] = nums2[j];
//     }
//     nums1.sort((a, b) => a - b);
// };

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6]


// let m = 3
// let nums1 = [1, 2, 3, 0, 0, 0]
// let nums2 = [2, 5, 6]
// let p = 0
// for (let i = m; i < nums1.length; i++) {
//     nums1[i] = nums2[p]
//     p++
// }

// console.log(nums1)