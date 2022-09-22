/**
 * @param {number[][]} a
 * @param {number[][]} b
 * @return {number[][]}
 */

let multiply = function(a, b) {
    let n = a.length, m = b[0].length, l = b.length
    let res = []
    for (let i = 0; i < n; i++) {
        res.push(new Array(m).fill(0))
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            for (let k = 0; k < l; k++) {
                res[i][j] += a[i][k] * b[k][j]
            }
        }
    }
    return res
}

let a1 = [[1,0,0],[-1,0,3]]
let b1 =[[7,0,0],[0,0,0],[0,0,1]]
console.log(multiply(a1, b1))