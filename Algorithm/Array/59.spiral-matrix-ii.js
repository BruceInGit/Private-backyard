//link https://leetcode.cn/problems/spiral-matrix-ii/

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    // Define boundary values 
    let left = 0
    let right = n - 1
    let bottom = n - 1
    let top = 0
    
    let totalStep = Math.pow(n, 2)
    let step = 1

    let matrix = new Array(n);
    for (let i = 0; i < n; i++) {
        matrix[i] = new Array(n);
    }

    while (step <= totalStep) {
        // From left to right
        for (let i = left; i <= right; i++) {
            matrix[top][i] = step
            step++
        }
        top++
        // From top to bottom
        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = step
            step++
        }
        right--
        // From right to left
        for (let i = right; i >= left; i--) {
            matrix[bottom][i] = step
            step++
        }
        bottom--
        // From bottom to top
        for (let i = bottom; i >= top; i--) {
            matrix[i][left] = step
            step++
        }
        left++
    }

    return matrix
};



