/** 
 * @param {number[]} nums
 * @param {number} target
 * @returns {boolean}
*/
var isMajorityElement = function (nums, target) {
    let i = 0
    while (i < nums.length && nums[i] != target) {
        i++
    }
    let j = i
    while (j < nums.length && nums[j] == target) {
        j++
    }
    return (j-i) > nums.length / 2
}

let nums = [2,4,5,5,5,5,5,6,6]
const res = isMajorityElement(nums, 5)
console.log(res)