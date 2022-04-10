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
}


var heap = new MaxBinaryHeap();
heap.insert(56);