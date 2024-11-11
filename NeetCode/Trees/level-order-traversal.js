function levelOrder(root) {
    let result = [];
   function dfsHelper(node, depth) {
        if (!node)
            return;
        
        if (result.length === depth) {
            result.push([]);
        }

        result[depth].push(node.val);
        dfsHelper(node.left, depth+1);
        dfsHelper(node.right, depth+1);
    }
    dfsHelper(root, 0);
    return result;
}