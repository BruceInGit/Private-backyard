//link https://leetcode.cn/problems/intersection-of-two-arrays/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const numSet = nums1.length > nums2.length ? new Set(nums2) : new Set(nums1)
    const intersectionSet = new Set()
 
    const maxArr = nums1.length > nums2.length ? nums1 : nums2
 
    for(let i = 0; i<maxArr.length;i++){
     if(numSet.has(maxArr[i])){
         intersectionSet.add(maxArr[i])
     }
    }
 
    return Array.from(intersectionSet)
 };