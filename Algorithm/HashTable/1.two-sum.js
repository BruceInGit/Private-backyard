// https://leetcode.cn/problems/two-sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const idx = new Map();
    for (let j = 0; ; j++) {
        const x = nums[j];
        // find secend number in left array
        if (idx.has(target - x)) {
            return [idx.get(target - x), j];  
        }
        idx.set(x, j); // save the value and index
    }
};