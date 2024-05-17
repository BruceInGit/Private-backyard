// Link:https://leetcode.cn/problems/squares-of-a-sorted-array/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// this is the first way 
var sortedSquares = function (nums) {
    return nums.map(item => item * item).sort((a, b) => a - b)
};

//the second way is using double pointer

var sortedSquaresByUsingDoublePointer = function (nums) {
   let left = 0
   let right = nums.length -1
   let newArr = []
   
   while(left <= right){
    let leftValue = Math.pow(nums[left],2)
    let rightValue = Math.pow(nums[right],2)
    // if the left value biger than right, push the left value to the last position of the new array,and move left pointer to next one
     if(leftValue > rightValue){
        newArr.unshift(leftValue)
        left++
     }else{
        newArr.unshift(rightValue)
        right--
     }
   }
   return newArr
};
