// workers = [[0,0],[1,1],[2,0]] , bikes = [[1,0],[2,2],[2,1]]
// res [0,2,1]

/**
 * @param {number[][]} workers 
 * @param {number[][]} bikes
 * @return {number} 
 */
let assignBikes = function(workers, bikes) {
    let n = workers.length, m = bikes.length
    let res = Number.MAX_SAFE_INTEGER
    let used = {}
    // i = worker
    let recur = function(i, cur) {
        if (i == n) {
            res = Math.min(res, cur)
            return
        }
        for (let j = 0; j < m; j++) {
            if (used[j]) continue
            let distance = Math.abs(workers[i][0] - bikes[j][0]) + 
                           Math.abs(workers[i][1] - bikes[j][1])
            cur += distance
            used[j] = true
            recur(i+1, cur)
            cur -= distance
            used[j] = false 
        }
    }
    recur(0, 0)
    return res
}

let workers = [[0,0],[1,1],[2,0]],  bikes = [[1,0],[2,2],[2,1]]
let workers2 = [[0,0],[2,1]],  bikes2 = [[1,2],[3,3]]
console.log(assignBikes(workers, bikes))
console.log(assignBikes(workers2, bikes2))
