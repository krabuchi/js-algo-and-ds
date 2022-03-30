class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
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
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while (current.next !== null) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift() {
        if (!this.head) return undefined;
        var temp = this.head;
        this.head = temp.next;
        this.length--;
        if (this.length === 0) this.tail = null;
        return temp;
    }

    unshift(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(idx) {
        if (idx <= 0 || idx >= this.length) return null;
        var limit = idx;
        var counter = 0;
        var firstItem = this.head;
        while (counter < limit) {
            firstItem = firstItem.next;
            counter++;
        }
        return firstItem;
    }

    set(idx, val) {
        var cur = this.get(idx);
        if(!cur) return false;
        cur.value = val;
        return true;
    }
}

var list = new SinglyLinkedList();
list.push("1");
list.push("2");
list.push("3");
list.push("4");