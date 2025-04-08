function recursiveFactorial(n) {
    if (n === 0) return 1

    return recursiveFactorial(n - 1) * n
}

function climbingStaircase(n) {
    let arr = [1, 2]

    for (let index = 2; index < n; index++) {
        arr[index] = arr[index - 1] + arr[index - 2];
    }

    return arr[n - 1]
}

function climbingStaircaseRecursive(n) {
    if (n < 3) {
        return n
    }

    return climbingStaircaseRecursive(n - 1) + climbingStaircaseRecursive(n - 2)
}