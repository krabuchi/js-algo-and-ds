/*
    Radix SORT is not a comparison sort
    It sorts number based on the size(number of digits)
    No. of loops depends on how large the largest number is

    | | | | | | | | | | |
    | | | | | | | | | | |
    | | | | | | | | | | |
    |0|1|2|3|4|5|6|7|8|9|

    check last(units) number and sort it
    move one place up and sort it again
    move one place up and go on 
*/

/* Radix Helper getDigit */

const getDigit = function (num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

/* Count number of Digits digitCount */

const digitCount = function (num) {
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

/* Check for largest number maxDigits */

const maxDigits = function (nums) {
    let maxDigit = 0;
    for(var i = 0; i < nums.length; i++) {
        maxDigit = Math.max(maxDigit, digitCount(nums[i]));
    }
    return maxDigit;
}

/* Sorting function RADIX */

const sort = function (nums) {
    var maxDigitCount = maxDigits(nums);
    for(var k = 0; k < maxDigitCount; k++) {
        var digitBucket = Array.from({length: 10}, () => []);
        for(var i = 0; i < nums.length; i++) {
            digitBucket[getDigit(nums[i], k)].push(nums[i]);
        }
        nums = [].concat(...digitBucket);
    }
    return nums;
}

/*
    1. get largest number in the list
    2. create a loop(l1) with largest num as limit
    3. inside l1 create an array(a1) with 10 sub arrays(0-9)(a2)
    4. create another loop(l2) inside l1 with with argument(arg) length as limit
    5. inside push arg[i] into respective subarray
        i.e arg[i][digit] is 0
        a1[a2].push(arg[i])
    6. Set arguments to new array a1
    7. return arguments
*/