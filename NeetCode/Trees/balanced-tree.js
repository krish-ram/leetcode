function isBalanced(root) {

    function dfsHelper(root) {
        if (!root) {
            return [true, 0];
        }

        let leftBalanced = dfs(root.left);
        let rightBalanced = dfs(root.right);
        let isBalanced = left[0] && right[0] && Math.abs(left[1]-right[1]) <= 1;

        return [isBalanced, 1 + Math.max(left[1], right[1])]
    }
    return dfs(root)[0];
}