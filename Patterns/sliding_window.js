/*
This pattern involves creating a window which can either be an array or number from one position to another

Depending on a certain condition, the window either increases or closes(and new window is created)

Very useful for keeping track of a subset of data in an array/string.
*/

/** Write a function called maxSubarrySum which accepts an array of integers and a number called n. 
 * The number should calculate the maximum sum on n consecutive elements in the array
 */

const maxSubarrySum = (arr, n) => {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < n) return null;
    for (let i = 0; i < n; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for(let i = n; i < arr.length; i++) {
        tempSum = tempSum - arr[i - n] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum / n;
};

maxSubarrySum([4, 2, 1, 6], 1);