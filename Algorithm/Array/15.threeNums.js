//link  https://leetcode.cn/problems/3sum
/**
 * @param {number[]} nums
 * @return {number[][]}
 * 
 * Use Set structure to remove duplicates
 */
var threeSum = function (nums) {
    const sortNums = nums.sort((a, b) => a - b)
    const array = new Set()

    for (let i = 0; i < sortNums.length; i++) {
        let left = i + 1;
        let right = sortNums.length - 1
        // skip this loop
        if (i > 0 && sortNums[i] === nums[i - 1]) continue;

        while (left < right) {
            let sum = sortNums[i] + sortNums[left] + sortNums[right]
            if (sum < 0) {
                left++
            } else if (sum > 0) {
                right--
            } else {
                array.add(JSON.stringify([sortNums[i], sortNums[left], sortNums[right]]))
                left++
                right--
            }
        }
    }

    return Array.from(array).map(JSON.parse)
};


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const sortNums = nums.sort((a, b) => a - b)
    const array = []

    for (let i = 0; i < sortNums.length; i++) {
        let left = i + 1;
        let right = sortNums.length - 1
        let num = sortNums[i]
        if (i > 0 && sortNums[i] === nums[i - 1]) continue;

        while (left < right) {
            let sum = num + sortNums[left] + sortNums[right]

            if (sum < 0) {
                left++
            } else if (sum > 0) {
                right--
            } else {
                array.push([num, sortNums[left], sortNums[right]])
                //Deduplication
                while (left < right && sortNums[left] == sortNums[left + 1]) {
                    left++
                }
                while (left < right && sortNums[right] == sortNums[right - 1]) {
                    right--
                }
                left++
                right--
            }
        }
    }

    return array
}