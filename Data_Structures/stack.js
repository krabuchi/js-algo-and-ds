/* 
Stack(collection of data) is abstract DS
Stack is a LIFO(Last In First Out) DS
*/

class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        var newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            var first = this.first;
            this.first = newNode;
            this.first.next = first;
        }
        return this.size++;
    }

    pop() {
        if(!this.first) return null;
        var first = this.first;
        if(this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = first.next;
        }
        this.size--;
        return first;
    }
}