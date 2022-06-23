/**
 * @param {number} n
 * @returns {number}
 */
var confusingNumberII = function(n) {
    let res = 0 
    const nums = [0, 1, 6, 9, 8], rotated = {0:0, 1:1, 6:9, 8:8, 9:6}

    const recur = function(v, r, digits) {
        if (v > n) return
        if (v != r) res++
        nums.forEach(n => {
            recur(v*10+n, rotated[n]*digits+r, digits*10)
        })
    }

    recur(1,1,10)
    recur(6,9,10)
    recur(9,6,10)
    recur(8,8,10)

    return res
}

let x = confusingNumberII(20)
console.log(x)