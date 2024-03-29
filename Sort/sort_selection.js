/* 
    Selection Sort
    1. Store the first element as the smallest value
    2. compare this item to the next item in the array until you find a smaller number
    3. if smaller number is found, designate that smaller  number to be the new "minimum" and contine until the end of the array
    4. if the minimum is not the value you initially began with, swap the two values
    5. repeat this with the next element until the array is sorted
*/

/* Swap function */

const selectionSort = (arr) => {
    const swap = (arr, i, j) => {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    for (var i = 0; i < arr.length; i++) {
        var minValue = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[minValue] > arr[j]) {
                minValue = j;
            }
        }
        if (i !== minValue) {
            swap(arr, minValue, i);
        }
    }
    return arr;
};

selectionSort([0, 2, 34, 22, 10, 19, 17]);