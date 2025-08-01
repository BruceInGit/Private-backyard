/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const arr = [...nums1, ...nums2].sort((a, b) => a - b)
    const len = arr.length
    const mid = Math.floor(len / 2)

    if (len % 2 === 0) {
        return (arr[mid - 1] + arr[mid]) / 2
    } else {
        return arr[mid]
    }
};

// Binary search
