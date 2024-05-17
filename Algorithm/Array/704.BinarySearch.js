// leetcode link https://leetcode.cn/problems/binary-search
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    // Get the left and right pointers of the array
    let left = 0
    let right = nums.length - 1

    while (left <= right) {
        //Get the middle position is same as let mid = Math.floor((left + right) / 2) 
        let mid = (left+right) >> 1
        if (target === nums[mid]) {
            return mid
        } else if (target > nums[mid]) {
            // If the target value is greater than the middle value, it means that the array value on the left are all less than the target value.
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return -1
};