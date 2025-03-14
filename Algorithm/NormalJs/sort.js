// quick sort
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    let left = []
    let right = []
    const base = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < base) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return [...quickSort(left), base, ...quickSort(right)]
}

function quickSortB(arr){
    if(arr.length<=1) return arr
    let pivot = arr[arr.length - 1]
    let left = []
    let right = []

    for (let index = 0; index < arr.length -1; index++) {
        const element = arr[index];
        if (element>pivot) {
            right.push(element)
        }else{
            left.push(element)
        }   
    }

    return quickSort(left).concat([pivot],quickSort(right))
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

function bubbleSortB(arr) {
    let swapped

    do {
        swapped = false
        for (let index = 0; index < arr.length - 1; index++) {
            if (arr[index] > arr[index + 1]) {
                [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]];
                swapped = true
            }
        }
    } while (swapped)

    return arr
}

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let numberToInsert = arr[i]
    }
}
return arr;
}

function bubbleSortB(arr) {
    let swapped

    do {
        swapped = false
        for (let index = 0; index < arr.length - 1; index++) {
            if (arr[index] > arr[index + 1]) {
                [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]];
                swapped = true
            }
        }
    } while (swapped)

    return arr
}

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let numberToInsert = arr[i]
        let j = i - 1

        while (j >= 0 && arr[j] > numberToInsert) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j+1] = numberToInsert
    }

    return arr
}


function mergeSort(arr){
 if (arr.length<2) {
    return arr
 }
 let mid = Math.floor(arr.length/2)
 let left = arr.slice(0,mid)
 let right = arr.slice(mid)

 return merge(mergeSort(left),mergeSort(right))
}

function merge(left,right){
    let result=[]
    let [i,j]=[0,0]

    while(i<left.length && j<right.length){
        if (left[i]<right[j]) {
            result.push(left[i])
            i++
        }else{
            result.push(right[j])
            j++
        }
    }

    while (i < left.length) {
        result.push(left[i]);
        i++;
    }

    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result
}