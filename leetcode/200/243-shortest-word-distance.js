var shortestDistance = function(words, word1, word2) {
    let pos = {}
    for (let i = 0; i < words.length; i++) {
        let w = words[i]
        if (!pos[w]) pos[w] = [i]
        else pos[w].push(i)
    }

    let i = 0, j = 0, pos1 = pos[word1], pos2 = pos[word2]
    let res = words.length - 1
    while (i < pos1.length && j < pos2.length) {
        if (pos1[i] < pos2[j]) {
            res = Math.min(res, pos2[j] - pos1[i])
            i++
        } else if (pos1[i] > pos2[j]) {
            res = Math.min(res, pos1[i] - pos2[j])
            j++
        } else return 0
    }
    return res
}

let words1 = ['practice', 'makes', 'perfect', 'coding', 'makes']
let wordA = 'makes', wordB = 'coding', wordC = 'practice'
console.log(shortestDistance(words1, wordB, wordC))
console.log(shortestDistance(words1, wordB, wordA)) 