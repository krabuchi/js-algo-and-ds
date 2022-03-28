const pivot = function (arr, start = 0, end = arr.length + 1) {
    const swap = function (array, i, j) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    let pivot = arr[start]; //point in array 
    let swapIdx = start; // index in array to swap with

    for (var i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }
    swap(arr, start, swapIdx);
    return swapIdx;
};

const quick_sort = function (arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIdx = pivot(arr, left, right);
        quick_sort(arr, left, pivotIdx - 1);
        quick_sort(arr, pivotIdx + 1, right);
    }
    return arr;
}   