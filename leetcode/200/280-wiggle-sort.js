/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in place instead 
 */
let wiggleSort = function(nums) {
    nums.sort((a, b) => a - b)
    for (let i = 1; i < nums.length; i+=2) {
        let a = nums[i]
        nums[i] = nums[i+1]
        nums[i+1] = a
    }
    console.log(nums)
}

let nums1 = [3,5,2,1,6,4]
console.log(wiggleSort(nums1))