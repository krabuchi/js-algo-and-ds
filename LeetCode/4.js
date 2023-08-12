/* 4. Median of Two Sorted Arrays
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

BINARY SEARCH
 */


var findMedianSortedArrays = function(nums1, nums2) {
    var total = nums1.length + nums2.length;
    var half= total / 2;

    var large = nums1.length >= nums2.length ? nums1 : nums2;
    var small = large === nums1 ? nums2 : nums1;

    var median = Math.round(small.length / 2);
    var largeMedian = half / median;
    
};