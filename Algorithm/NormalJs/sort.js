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
        let swapped = false
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true
            }
        }
        if (!swapped) {
            break
        }
    }
    return arr;
}

function bubbleSortB(arr){
   let swapped
  
  do {
    swapped = false
    for (let index = 0; index < arr.length -1; index++) {
        if (arr[index] > arr[index + 1]) {
            [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]];
            swapped = true
        }
       }
   }while(swapped)
   
    return arr
}