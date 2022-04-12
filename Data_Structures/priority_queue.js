class Node {
    constructor(val, priority) {
        this.value = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    bubbleUp() {
        var index = this.values.length - 1;
        var element = this.values[index];
        while (index > 0) {
            var parentIdx = Math.floor((index - 1) / 2);
            var parent = this.values[parentIdx];
            if (parent.priority >= element.priority) break;
            this.values[parentIdx] = element;
            this.values[index] = parent;
            index = parentIdx;
        }
    }

    insert(val, priority) {
        let newNode = new Node(val, priority)
        this.values.push(newNode);
        this.bubbleUp();
    }

    sinkDown() {
        var idx = 0;
        var length = this.values.length;
        var element = this.values[0];
        while (true) {
            var leftChildIdx = 2 * idx + 1;
            var rightChildIdx = 2 * idx + 2;
            var leftChild, rightChild;
            var swap = null;
            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild.priority > element.priority) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    (swap === null && rightChild.priority > element.priority) ||
                    (swap !== null && rightChild.priority > leftChild.priority)
                ) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
        }
    }

    extractMax() {
        var first = this.values[0];
        var last = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = last;
            this.sinkDown();
        }
        return first;
    }

}