/* 
    Trees are DS that consist of nodes
    in a parent child relationship

    Binary Trees
        - can have atmost 2 children
        - everything to left should be smaller than parent
        - everything to the right should be larger than parent   
*/

class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
}

var tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);