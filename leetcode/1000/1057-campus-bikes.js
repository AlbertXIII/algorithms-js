/**
 * @param {number[][]} workers 
 * @param {number[][]} bikes
 * @return {number} 
 */
let assignBikes = function(workers, bikes) {
    let distances = {}, n = workers.length
    for (let i = 0; i < n; i++) {
        let w = workers[i]
        for (let j = 0; j < bikes.length; j++) {
            let b = bikes[j]
            let dist = Math.abs(w[0] - b[0] + Math.abs(w[1] - b[1]))
            if (distances[dist] === undefined) distances[dist] = []
            distances[dist].push([i, j])
        }
    }
    let res = new Array(n).fill(-1)
    let usedBike = {}
    for (let d = 0; d <= 2000; d++) {
        let bucket = distances[d]
        if (bucket) {
            for (let b = 0; b < bucket.length; b++) {
                let p = bucket[b]
                let worker = p[0], bike = p[1]
                if (res[worker] == -1 && !usedBike[bike]) {
                    res[worker] = bike
                    usedBike[bike] = true
                }
            }
        }
    }
    return res
}

let workers1 = [[0,0],[2,1]], bikes1 = [[1,2],[3,3]] 
console.log(assignBikes(workers1, bikes1))