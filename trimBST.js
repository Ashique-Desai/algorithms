// Given the root of a binary search tree and the lowest and highest boundaries as low and high, trim the tree so that all its elements lies in [low, high]. Trimming the tree should not change the relative structure of the elements that will remain in the tree (i.e., any node's descendant should remain a descendant). It can be proven that there is a unique answer.

// Return the root of the trimmed binary search tree. Note that the root may change depending on the given bounds. 

// Example 1:
// Input: root = [1,0,2], low = 1, high = 2
// Output: [1,null,2]

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function trimBST(root, low, high) {
    if (root === null) {
        return null;
    }

    if (root.val < low) {
        return trimBST(root.right, low, high);
    }

    if (root.val > high) {
        return trimBST(root.left, low, high);
    }

    root.left = trimBST(root.left, low, high);
    root.right = trimBST(root.right, low, high);

    return root;
}

// Example usage:
const root = new TreeNode(1, new TreeNode(0), new TreeNode(2));
const low = 1;
const high = 2;

const trimmedRoot = trimBST(root, low, high);
// The trimmedRoot now represents the tree [1, null, 2]
