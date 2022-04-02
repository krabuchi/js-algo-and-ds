class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            var temp = this.tail;
            temp.next = newNode;
            newNode.prev = temp;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        var curTail = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = curTail.prev;
            this.tail.next = null;
            curTail.prev = null;
        }
        this.length--;
        return curTail;
    }

    shift() {
        if (!this.head) return undefined;
        var oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    unshift(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            var curHead = this.head;
            curHead.prev = newNode;
            newNode.next = curHead;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(idx) {
        if (idx < 0 || idx > this.length) return null;
        if (idx <= this.length / 2) {
            var counter = 0;
            var firstItem = this.head;
            while (counter !== idx) {
                firstItem = firstItem.next;
                counter++;
            }
            return firstItem;
        } else {
            var counter = this.length - 1;
            var lastItem = this.tail;
            while (counter !== idx) {
                lastItem = lastItem.prev;
                counter--;
            }
            return lastItem;
        }
    }

    set(idx, val) {
        var t = this.get(idx);
        if (t !== null) {
            t.value = val;
            return true;
        }
        return false;
    }

    insert(idx, val) {
        if(idx < 0 || idx > this.length) return false;
        if(idx === 0) return this.unshift(val);
        if(idx === this.length) return this.push(val);
        var newNode = new Node(val);
        var before = this.get(idx - 1);
        var after = before.next; 
        before.next = newNode;
        newNode.prev = before;
        newNode.next = after;
        after.prev = newNode;
        this.length++;
        return true;
    }

    remove(idx) {
        if(idx < 0 || idx >= this.length) return undefined;
        if(idx === 0) return this.shift();
        if(idx === this.length - 1) return this.pop();
        var item = this.get(idx);
        var prev = item.prev;
        var next = item.next;
        prev.next = next;
        next.prev = prev;
        item.next = null, item.prev = null;
        this.length--;
        return item;
    }

    reverse() {
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        for(var i = 0; i < this.length; i++) { 
            var k = node.next;
            var temp = k;
            node.next = node.prev;
            node.prev = k;
            node = temp;
        }
        return this;
    }
}

var list = new DoublyLinkedList();
list.push("1");
list.push("2");
list.push("3");
list.push("4");