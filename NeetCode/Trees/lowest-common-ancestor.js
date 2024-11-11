/*
    Given a binary search tree (BST) where all node values are unique, and two nodes from the tree p and q, 
    return the lowest common ancestor (LCA) of the two nodes.

    The lowest common ancestor between two nodes p and q is the lowest node in a tree T such that 
    both p and q as descendants. The ancestor is allowed to be a descendant of itself.

    Example 1:
    Input: root = [5,3,8,1,4,7,9,null,2], p = 3, q = 8
    Output: 5

    Example 2:
    Input: root = [5,3,8,1,4,7,9,null,2], p = 3, q = 4
    Output: 3

    Explanation: The LCA of nodes 3 and 4 is 3, since a node can be a descendant of itself.
*/

/*
    Root is always a common ancestor of all the nodes,
    If p and q are going to separate branches, then the point of split will be the LCA.
    if p and q are less than node, look in left subtree. If greater, look in right sub tree. 
    If one of p or q is equal to node, that itself will be the LCA.
*/
// T - O(log n)
function lowestCommonAncestor(root, p, q) {
    let curr = root;
    while (curr) {
        if (p.val > curr.val && q.val > curr.val) {
            curr = curr.right;
        } else if (p.val < curr.val && q.val < curr.val) {
            curr = curr.right;
        } else {
            return curr;
        }
    }
}
