/**
 * You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.
 */

var findMaxAverage = function(nums, k) {
    let maxSum = 0;
    let tempSum = 0;
    if (nums.length < k) return null;
    for (let i = 0; i < k; i++) {
        maxSum += nums[i];
    }
    tempSum = maxSum;
    for(let i = k; i < nums.length; i++) {
        tempSum = tempSum - nums[i - k] + nums[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum / k;
};