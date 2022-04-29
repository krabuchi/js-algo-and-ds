/* 
1. Start by picking the second element in the array
2. Compare the second element with the one before it and swap if necessary
3. Continue to te next elemnt and if it is in the incorrect order, iterate through the sorted portion to place the element in the correct place.
4. Repeat until the array is sorted
*/

const insertion_sort = function (arr) {
    for(var i = 1; i < arr.length; i++) {
        var currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentVal;
    }
    return arr;
}