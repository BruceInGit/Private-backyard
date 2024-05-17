//LINK:https://leetcode.cn/problems/remove-element

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    // declare a slow pointer
    let newArrayPointer = 0
    
    for (let i = 0; i<nums.length; i++) {
        // if the value is different from the val, nums[newArrayPointer] = nums[i] and newArrayPointer increment
        if (nums[i] !== val) {
            nums[newArrayPointer++] = nums[i];
        }        
    }

    return newArrayPointer
};