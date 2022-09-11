/* 
COUNT UNIQUE VALUES
Write a function which takes a sorted array and counts unique values
There will be negative numbers in the array but it will always be sorted
*/

var countUniqueValues = function (arr) {
    var i = 0, j = i + 1, val = arr.length > 0 ? 1 : 0;
    for(i; i < arr.length; i++) {
        if(arr[i] !== arr[j] && arr[j] !== undefined) {
            val++
        }
        j++;
    }
    return val;
}

