//LINK https://leetcode.cn/problems/minimum-size-subarray-sum/description/

// Using slide windows
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let start = 0
    let end = 0
    let length = Infinity
    let sum=0
    // doing loop logic when end pointer smaller then nums array
    while (end < nums.length) {
    // the sum adding the end value
        sum += nums[end]
        //when sum is biger than target
        while (sum >= target) {
            // update the length
            length = Math.min(length, end - start+1)
            // move the start pointer and delete the value from sum
            sum -= nums[start++]
        }
        end++
    }


    return length === Infinity ? 0 : length;
};