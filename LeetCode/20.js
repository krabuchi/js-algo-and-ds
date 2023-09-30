/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
*/


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var collection = [];
    var parens = '[] () {}';
    var i = 0;
    while(i < s.length) {
        collection.push(s[i]);
        i++;

        var start = collection[collection.length - 2];
        var end = collection[collection.length - 1];
        var pattern = start + end;
        if(parens.includes(pattern)) {
            collection.pop();
            collection.pop();
        }
    }
    return collection.length === 0;
};

isValid('{([])}([])[]')