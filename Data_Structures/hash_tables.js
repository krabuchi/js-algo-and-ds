class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        var total = 0;
        var WEIRD_PRIME = 31;
        for (var i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            var value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        var index = this._hash(key);
        console.log(index);
        if(!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }

    get(key) {
        var index = this._hash(key);
        if(this.keyMap[index]) {
            for(var i = 0; i < this.keyMap[index].length; i++) {
                if(this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1];
                }
            }
        }
        return undefined;
    }
}

var ht = new HashTable(17);
ht.set('a', 'one');
ht.set('b', 'two');
ht.set('c', 'three');
ht.set('d', 'four');
ht.set('e', 'five');
ht.set('f', 'six');