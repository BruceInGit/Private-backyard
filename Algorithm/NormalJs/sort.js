// quick sort
function quickSort(arr){
    if (arr.length <= 1) return arr;
    let left=[]
    let right=[]
    const base = arr[0]
   for(let i=1;i<arr.length;i++){
    if (arr[i] < base) {
        left.push(arr[i])
    }else{
         right.push(arr[i])
    }
   }

   return [...quickSort(left),base,...quickSort(right)]
}

// bubble sort
function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
