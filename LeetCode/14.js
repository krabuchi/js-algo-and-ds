/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */

var prevString = '';
var longestCommonPrefix = function(strs) {
  var result = '';
  for(var i = 0; i < strs[0].length; i++) {
    var char = strs[0][i];
    for(var j = 0; j < strs.length; j++) {
      if(strs[j][i] !== char) return result;
    }
    result = result + char;
  }
  return result;
};

longestCommonPrefix(["flower","flow","flight"]);