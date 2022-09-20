/**
 * Palindrome Number
 * Given an integer x, return true if x is palindrome integer.
 * An integer is a palindrome when it reads the same backward as forward.
 * For example, 121 is a palindrome while 123 is not.
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x) {
    function isPalUtil(num , dupNum) {
		if (num == 0) {
			return dupNum;
		} else {
			dupNum = isPalUtil(parseInt(num / 10), dupNum);
		}
		if (num % 10 == dupNum % 10) {
			// if first digit values of num and
			// dupNum are equal divide dupNum
			// value by 10 to keep moving in sync
			// with num.
			return parseInt(dupNum / 10);
		} else {
			// At position values are not
			// matching throw exception and exit.
			// no need to proceed further.
			throw e;
		}

	}
    if (num < 0) num = (-num);
    var dupNum = (num);
    return isPalUtil(num, dupNum);
};


// A recursive javascript program to
// check whether a given number
// is palindrome or not



	function isPal(num)
	{

	}

