var findLeaves = function() {
    let dfs = function(n, removed) {
        if (!n.left && !n.right) {
            removed.push(n.val)
            return true
        }
        if (n.left) {
            let needRemove = dfs(n.left, removed)
            if (needRemove) n.left = null
        }
        if (n.right) {
            let needRemove = dfs(n.right, removed)
            if (needRemove) n.right = null
        }
        return false
    }

    let res = [], cur = root
    while (cur) {
        let removed = []
        let needRemove = dfs(cur, removed)
        res.push(removed)
        if (needRemove) cur = null
    }
    return res
}

let tree1 = [1, 2, 3, 4, 5]