/*
You are given the root of a binary tree root. Invert the binary tree and return its root.

Example 1:
Input: root = [1,2,3,4,5,6,7]
Output: [1,3,2,7,6,5,4]

Example 2:
Input: root = [3,2,1]
Output: [3,1,2]

Example 3:
Input: root = []
Output: []
*/
function invertTree(root) {
    if (!root || !root.val)
        return null;

    const tmp = root.right;
    root.right = root.left;
    root.left = tmp

    this.invertTree(root.left);
    this.invertTree(root.right);
    return root;
}
