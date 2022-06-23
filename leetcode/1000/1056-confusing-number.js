/**
 * @param {number} n
 * @returns {boolean}
 * @sk google
 */
 var confusingNumber = function(n) {
    let s = n + '', rotated = {0:0,1:1, 6:9, 9:6, 8:8}
    let res = [] 
    for (let i = s.length - 1; i >= 0; i--) {
        const c = s[i]
        if (rotated[c] === undefined) return false
        res.push(rotated[c])
    }

    return res.join('') != n
}

let x = confusingNumber(11)
console.log(x)