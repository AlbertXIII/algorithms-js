let minKnightMoves = function(x, y) {
    let visited = {"0,0" : true}
    const dirs = [2, 1, -2, -1, 2, -1, -2, 1, 2]
    let queue = [[0,0,0]]
    while (queue.length > 0) {
        const q = queue.shift()
        const i = q[0], j = q[1], s = q[2]
        if (i == x && j == y) return s

        for (let d = 0; d < 8; d++) {
            const a = i + dirs[d]
            const b = j + dirs[d+1]
            if (a >= -300 && b >= -300 && a <= 300 && b <= 300
                && visited[a + ',' + b] === undefined) {
                visited[a + '' + b] = true
                queue.push([a, b, s+1])
            }
        }
    }
    return -1
}

console.log(minKnightMoves(5, 5))