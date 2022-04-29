/*
This pattern uses objects or sets to collect values/frequencies of values

This can often avoid the need for nested loops or O(n^2) operations
with arrays/strings

*/

var same = function (arr1, arr2) {
    if(arr1.length !== arr2.length) return false;

    var frequencyCounter1 = {};
    var frequencyCounter2 = {};
    for(var val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for(var val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    for(var key in frequencyCounter1) {
        if(!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false;
        }
    }
    return true;
};

same([1, 2, 3, 1], [1, 9, 4, 1]);