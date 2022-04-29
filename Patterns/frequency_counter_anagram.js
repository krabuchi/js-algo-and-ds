/* Write a function to determin if the second string is 
an anagram of the first */

var anagram = function (str1, str2) {
    if(str1.length !== str2.length) return false;

    var fc_one = {};
    var fc_two = {};

    for(var i of str1) {
        fc_one[i] = (fc_one[i] || 0) + 1;
    }

    for(var i of str2) {
        fc_two[i] = (fc_two[i] || 0) + 1;
    }

    for(var i in fc_one) {
        if(!(i in fc_two)) {
            return false;
        }

        if(fc_one[i] !== fc_two[i]) return false;
    }
    return true;
}