/*
    O(n)
    O(h) where h is height of tree
*/

// Simple version
function hasPathSum(root, targetSum) {
    if (!root) return false; // Base case: empty tree

    if (!root.left && !root.right) { 
        // Base case: leaf node
        return root.val === targetSum;
    }

    // Recursive case: subtract current node's value and explore children
    const remainingSum = targetSum - root.val;
    return hasPathSum(root.left, remainingSum) || hasPathSum(root.right, remainingSum);
}

// Level 2 version
function pathSum(root, targetSum) {
    const allPaths = []; // Store all valid paths

    function dfs(node, currentPath, currentSum) {
        if (!node) return; // Base case: reached null node

        currentPath.push(node.val);
        currentSum += node.val;

        if (!node.left && !node.right && currentSum === targetSum) {
            // Base case: found a valid path (leaf node with correct sum)
            allPaths.push([...currentPath]); // Add a copy of the path
        }

        // Recursive case: explore left and right subtrees
        dfs(node.left, currentPath, currentSum);
        dfs(node.right, currentPath, currentSum);

        currentPath.pop(); // Backtrack: remove the last node from the path
    }

    dfs(root, [], 0);
    return allPaths;
}

// Sample binary tree node class (modify if your tree structure is different)
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const root = new TreeNode(5);
root.left = new TreeNode(4);
root.right = new TreeNode(8);
root.left.left = new TreeNode(11);
root.left.left.left = new TreeNode(7);
root.left.left.right = new TreeNode(2);
root.right.left = new TreeNode(13);
root.right.right = new TreeNode(4);
root.right.right.right = new TreeNode(1);

const targetSum = 22;
console.log(hasPathSum(root, targetSum));