/**
 * @param {number[][]} costs
 * @return number 
 */
let minCost = function(costs) {
    let n = costs.length
    if (!costs || n < 1) return 0
    for (let i = 1; i < n; i++) {
        let c = costs[i]
        let cPre = costs[i-1]
        c[0] += Math.min(cPre[1], cPre[2])
        c[1] += Math.min(cPre[0], cPre[2])
        c[2] += Math.min(cPre[1], cPre[0])
    }
    return Math.min(costs[n-1][0], Math.min(costs[n-1][1], costs[n-1][2]))
}

let costs1 = [[17,2,17],[16,16,5],[14,3,19]]
console.log(minCost(costs1))