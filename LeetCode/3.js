/* 3. Longest Substring Without Repeating Characters 
    Given a string s, find the length of the longest substring without repeating characters.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var max = 0;
    var start = 0;
    var hash = {};

    for(var end = 0; end < s.length; end++) {
        var right = s[end];
        hash[right] = hash[right] + 1 || 1;

        while(hash[right] > 1) {
            var left = s[start];

            if(hash[left] > 1) {
                hash[left]--;
            } else {
                delete hash[left]
            }
            start++
        }
        max = Math.max(max, (end - start) + 1);
    }
    return max;
};

lengthOfLongestSubstring('abcabcbb');