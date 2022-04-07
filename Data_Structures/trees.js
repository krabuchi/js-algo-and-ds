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

    insert(val) {
        var newNode = new Node(val);
        if(!this.root) {
            this.root = newNode;
            return this;
        } else {
            var current = this.root;
            while(true) {
                if(val < current.value) {
                    if(current.left === null) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                }  else if(val > current.value) {
                    if(current.right === null) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                } else {
                    return undefined;
                }
            }
        }
    }

    find(val) {
        if(this.root === null) return false;
        var current = this.root;
        var found = false;
        while(current && !found) {
            if(val < current.value) {
                current = current.left;
            } else if (val > current.value) {
                current = current.right;
            } else {
                return true;
            }
        }
        if(!found) return undefined;
        return false;
    }

    bfs () {
        var data = [];
        var queue = [];
        var node = this.root;
        queue.push(this.root);
        while(queue.length) {
            node = queue.shift();
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(18);
tree.insert(5);
tree.insert(6);
