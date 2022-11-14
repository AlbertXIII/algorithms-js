/**
 * @param {string[]} words 
 */
var wordDistance = function(words) {
    this.n = words.length
    this.map = {} // word : [indexes]
    for (let i = 0; i < words.length; i++) {
        let c = words[i]
        if (!this.map[c]) this.map[c] = []
        this.map[c].push(i)
    }
}
/**
 * 
 * @param {string} word1 
 * @param {string} word2
 * @return {number} 
 */
wordDistance.prototype.shortest = function(word1, word2) {
    let posA = this.map[word1], posB = this.map[word2]
    let res = this.n
    for (let i = 0, j = 0; i < posA.length && j < posB.length;) {
        let pos1 = posA[i], pos2 = posB[j]
        if (pos1 < pos2) {
            res = Math.min(res, pos2 - pos1)
            i++
        } else {
            res = Math.min(res, pos1 - pos2)
            j++
        }
        return res
    }
}

let words1 = ['practice', 'makes', 'perfect', 'coding', 'makes']
let wordA = 'makes', wordB = 'coding', wordC = 'practice'
console.log(wordDistance(words1))
console.log(wordDistance(words1, wordB, wordC)) 