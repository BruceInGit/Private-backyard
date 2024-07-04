//link https://leetcode.cn/problems/happy-number/description/
/**
 * @param {number} n
 * @return {boolean}
 */

var sumNumber = function (number) {
    let n = number.toString();
    let sum = 0
    for (let i = 0; i < n.length; i++) {
        let num = Number(n[i])
        sum = sum + num * num
    }

    return sum
}

var isHappy = function (n) {
    let sums = new Set()
    let total = n

    while (total !== 1) {
        total = sumNumber(total)
        if (sums.has(total)) {
            return false
        }

        sums.add(total)
    }

    return total === 1
};

