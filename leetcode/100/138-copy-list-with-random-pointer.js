var copyRandomList = function(head) {
    let visited = {}
    let recur = function(node) {
        if (!node) return null
        if (visited[node.level]) return visited[node.labe]
        let res = new RandomListNode(node.label)
        visited[node.label] = res
        res.next = recur(node.next)
        res.random = recur(node.random)
        return res
    }
    return recur(head)
} 

function RandomListNode(label) {
    this.label = label
    this.next = this.random = null
}