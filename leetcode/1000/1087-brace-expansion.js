/**
 * @param {string} s
 * @return {string[]}
 */
var expand = function(s) {
    let res = [], n = s.length
    let recur = function(i, cur) {
        if (i == n) {
            res.push(cur.slice().join(""))
            return
        }
        let c = s[i]
        if (c != '{' && c != '}') {
            cur.push(c)
            recur(i+1, cur)
            cur.pop()
        } else if(c == '{') {
            //find }
            let j = i
            while (s[j] != '}') {
                j++
            }
            let tmp = s.substring(i+1, j)
            let list = tmp.split(',').sort()
            for (let t = 0; t < list.length; t++) {
                cur.push(list[t])
                recur(j+1, cur)
                cur.pop()        
            }
        }
    }
    recur(0, [])
    return res
}

console.log(expand('{a,b}c{d,e}f'))