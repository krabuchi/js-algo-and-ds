var hash = function (key, arrayLen) {
    var total = 0;
    var WEIRD_PRIME = 31;
    for(var i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        var value = char.charCodeAt(0) - 96;
        total = (total * WEIRD_PRIME + value) % arrayLen;
    }
    return total;
}