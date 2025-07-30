/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left=0
    let right=0
    let hashTable = new Set()
    let length = 0

    while(right< s.length){
        if(!hashTable.has(s[right])){
            hashTable.add(s[right])
            right++
            length = Math.max(length, right - left)
        }else{
            hashTable.delete(s[left])
            left++
        }
    }
    
    return length
};

// Genenic solution: Sliding Window
// Set is used to store unique characters in the window.
// left and right are the pointers at the ends of the window.
// If there are no duplicates, shift right by right and update the maximum length.
// If a duplicate character is encountered, shrink the window from the left (delete s[left]).