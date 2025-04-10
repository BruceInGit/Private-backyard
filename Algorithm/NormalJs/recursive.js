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

// hanoi tower
function hanoi(n,from,to,using){
  if (n==1) {
    console.log(`Move disk 1 from ${from} to ${to}`);
    return;
  }

  hanoi(n-1, from,using,to)
  console.log(`Move disk ${n} from ${from} to ${to}`)
  hanoi(n-1,using,to,from)
}