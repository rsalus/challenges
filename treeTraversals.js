// TreeNode class (same as before)
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Tree initialization (example)
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

// Pre-order Traversal (Root -> Left -> Right)
function preorderTraversal(node) {
    if (!node) return [];
    return [node.val, ...preorderTraversal(node.left), ...preorderTraversal(node.right)];
}

// In-order Traversal (Left -> Root -> Right)
function inorderTraversal(node) {
    if (!node) return [];
    return [...inorderTraversal(node.left), node.val, ...inorderTraversal(node.right)];
}

// Post-order Traversal (Left -> Right -> Root)
function postorderTraversal(node) {
    if (!node) return [];
    return [...postorderTraversal(node.left), ...postorderTraversal(node.right), node.val];
}

// Level-order Traversal (Breadth-First Search)
function levelorderTraversal(node) {
    if (!node) return [];
    const queue = [node];
    const result = [];
    while (queue.length) {
        const current = queue.shift();
        result.push(current.val);
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }
    return result;
}

console.log("Pre-order:", preorderTraversal(root));   // [1, 2, 4, 5, 3]
console.log("In-order:", inorderTraversal(root));     // [4, 2, 5, 1, 3]
console.log("Post-order:", postorderTraversal(root));  // [4, 5, 2, 3, 1]
console.log("Level-order:", levelorderTraversal(root)); // [1, 2, 3, 4, 5]

/*
    TREE
      1
     / \
    2   3
   / \
  4   5 

Pre-order Traversal:

    Order: Root -> Left -> Right
    Idea: Visit the root first, then recursively visit the left subtree, followed by the right subtree.
    Use Cases:
        Copying the tree
        Prefix expression notation (Polish notation)

In-order Traversal:

    Order: Left -> Root -> Right
    Idea: Visit the left subtree, then the root, then the right subtree.
    Use Cases:
        Get nodes in ascending order (if the tree is a binary search tree)
        Infix expression notation

Post-order Traversal:

    Order: Left -> Right -> Root
    Idea: Visit the left subtree, then the right subtree, and finally the root.
    Use Cases:
        Tree deletion
        Postfix expression notation (Reverse Polish notation)

Level-order Traversal:

    Order: Level by level (from left to right)
    Idea: Use a queue to process nodes level by level.
    Use Cases:
        Breadth-first search (BFS)
        Printing a tree level by level

*/