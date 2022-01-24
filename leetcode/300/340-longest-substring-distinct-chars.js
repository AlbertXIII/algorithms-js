// leetcode delia 340 : Longest substring with At Most K Distinct Characters

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

var lengthOfLongestSubstringKDistinct = function(s, k) {
    // slide window
    // a go right when num of chars <= k
    // update maxLen
    // b go right when num of chars > k
    let n = s.length, i = 0, j = 0, res = 0
    let counts = {}
    let numOfChars = 0
    for (;j < n; j++) {
        let c = s.charAt(j)
        if (!counts[c]) {
            counts[c] = 1
            numOfChars++
        } else counts[c]++
        while (numOfChars > k) {
            let ch = s.charAt(i)
            counts[ch]--
            if (counts[ch] == 0) numOfChars--
            i++
        }
        res = Math.max(res, j - i + 1)
    }
    return res
}

console.log(lengthOfLongestSubstringKDistinct('eceba', 2))