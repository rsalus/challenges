/*

Time Complexity: O(n), where n is the number of nodes in the tree.

    The function visits each node in the tree exactly once during the flattening process.
    The operations performed at each node (swapping children, updating pointers) are constant time operations.

Space Complexity:

    O(1) if you consider only the explicit space used by the function itself (variables current and tail).
    O(h) if you include the implicit space used by the call stack due to recursion, where h is the height of the tree. 
        In the worst case (a completely skewed tree), this could be O(n).
    However, since this is a Morris Traversal, the space complexity is O(1)

*/
function flatten(root) {
    let current = root;  // Start from the root node
    let tail = null;     // Keep track of the last node in the flattened list

    while (current) {
        if (current.left) {
            // If there's a left subtree, find the rightmost node in it
            let predecessor = current.left;
            while (predecessor.right) {
                predecessor = predecessor.right;
            }

            // Connect the rightmost node to the original right child
            predecessor.right = current.right;

            // Move the left subtree to the right
            current.right = current.left;
            current.left = null;
        }

        // Update tail to the last node in the flattened list
        tail = current;

        // Move to the next node (now the right child)
        current = current.right;
    }
}

// Sample binary tree node class (modify if your tree structure is different)
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function printFlattenedTree(root) {
    let current = root;
    while (current) {
        console.log(current.val);
        current = current.right;
    }
}

// Tree initialization (example)
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(5);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);
root.right.right = new TreeNode(6);

// Flatten the tree
flatten(root);

// Print the flattened tree
printFlattenedTree(root);