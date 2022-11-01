/**
 * @param {integer} person a
 * @param {integer} person b
 * @return {boolean} wheater a knows b
 */
let knows = function(a, b) {
    return true
}

/**
  * @param {function} knows()
  * @return {function}
  */
let solution = function(knows) {
    /**
     * @param {integer} n total people
     * @return {integer} celebrity 
     */
    return function(n) {
        let candidate = 0
        for (let i = 1; i < n; i++) {
            if (knows(candidate, i)) candidate = i
        }
        for (let i = 0; i < n; i++) {
            if (i != candidate && (knows(candidate, i)) || !knows(i, candidate))
                return -1
        }
        return candidate
    }
}

let people1 = [[1,1,0],[0,1,0],[1,1,1]]
console.log(solution(people1))