// https://leetcode.com/problems/invert-binary-tree/description/


// Given the root of a binary tree, invert the tree, and return its root. 

// Example 1:
// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

// Function to invert a binary tree.
var invertTree = function (root) {
    if (root === null) {
        return null;
    }
    const temp = root.left;
    root.left = root.right;
    root.right = temp;

    invertTree(root.left);
    invertTree(root.right);

    return root;
};

// Helper function to convert an array to a binary tree.
const arrayToTree = (arr) => {
    if (arr.length === 0) return null;
    const root = new TreeNode(arr[0]);
    const queue = [root];
    let i = 1;

    while (i < arr.length) {
        const current = queue.shift();

        if (arr[i] !== null) {
            current.left = new TreeNode(arr[i]);
            queue.push(current.left);
        }
        i++;

        if (i < arr.length && arr[i] !== null) {
            current.right = new TreeNode(arr[i]);
            queue.push(current.right);
        }
        i++;
    }

    return root;
};

// Helper function to print the binary tree in level order (for testing purposes).
const treeToArray = (root) => {
    if (!root) return [];
    const result = [];
    const queue = [root];

    while (queue.length > 0) {
        const current = queue.shift();
        result.push(current ? current.val : null);
        if (current) {
            queue.push(current.left);
            queue.push(current.right);
        }
    }

    return result;
};

// Example usage:
const rootArray = [4, 2, 7, 1, 3, 6, 9];
const root = arrayToTree(rootArray);
const invertedRoot = invertTree(root);
console.log(treeToArray(invertedRoot));
