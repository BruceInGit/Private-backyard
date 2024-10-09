// link https://leetcode.cn/problems/4sum-ii/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
    let sumHashTable = new Map()
    let count = 0

    for (let i of nums1) {
        for (let j of nums2) {
            let sum = i + j
            sumHashTable.set(sum, (sumHashTable.get(sum) || 0) + 1)
        }
    }

    for (let k of nums3) {
        for (let l of nums4) {
            let sum = k + l

            count = (sumHashTable.get(0 - sum) || 0) + count
        }
    }

    return count

};