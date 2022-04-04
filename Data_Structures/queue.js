/*
    Abstract DS to add and remove data 
    First In First Out
*/

class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        var newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = this.first;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return this.size++;
    }

    dequeue() {
        if(!this.first) return null;
        var first = this.first;
        if(first === this.last) {
            this.first = null;
            this.last = null;
        } else {
            this.first = first.next;
            first.next = null;
        }
        this.size--;
        return first; 
    }
}
