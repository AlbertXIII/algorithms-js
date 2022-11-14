function TreeNode(val) {
    this.val = val
    this.left = this.right = null
}
/**
 * @param {TreeNode} root
 * @return {TreeNode} 
 */
let upsideDownBinaryTree = function(root) {
    let dfs = function(node) {
        if (!node || !node.left) return node
        let newRoot = dfs(node.left)
        node.left.left = node.right
        node.left.right = node
        node.left = null
        node.right = null
        return newRoot
    }
    return dfs(root)
}

let tree1 = [1,2,3,4,5]
console.log(upsideDownBinaryTree(tree1))