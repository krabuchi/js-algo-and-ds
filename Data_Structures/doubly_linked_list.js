class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        var newNode = new Node(val);
        if(!this.head) {
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
        if(!this.head) return undefined;
        var curTail = this.tail;
        if(this.length === 1) {
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
        if(!this.head) return undefined;
        var oldHead = this.head;
        if(this.length === 1) {
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
        if(!this.head) {
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
}

var list = new DoublyLinkedList();
list.push("1");
list.push("2");
list.push("3");
list.push("4");