class MaxBinaryHeap {
    constructor() {
        this.values = [41, 39, 33, 18, 27, 12];
    }

    bubbleUp() {
        var index = this.values.length - 1;
        var element = this.values[index];
        while (index > 0) {
            var parentIdx = Math.floor((index - 1) / 2);
            var parent = this.values[parentIdx];
            if (parent >= element) break;
            this.values[parentIdx] = element;
            this.values[index] = parent;
            index = parentIdx;
        }
    }

    insert(element) {
        this.values.push(element);
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
                if (leftChild > element) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    (swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)
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


var heap = new MaxBinaryHeap();
heap.insert(56);