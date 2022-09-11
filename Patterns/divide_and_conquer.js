/* 
This pattern invokes dividing a data set into smaller chunks and then repeating process with subset of 
data. This pattern can tremendously reduce time complexity.   
*/

/*
 Given sorted array of integers, write a function called search, that accepts a value and returns the index where
  the value passed to function is located. if the value is not found, return -1.
*/

const search = (arr, val) => {
    let min = 0;
    let max = arr.length - 1;
    while(min <= max) {
        let midpoint = Math.floor((min + max) / 2);
        if(arr[midpoint] > val) {            
            max = midpoint - 1;
        } else if (arr[midpoint] > val) {
            min = midpoint + 1;
        } else {
            return midpoint;
        }
    }
    return -1;
}