let solution = function(read4) {
    let iBuf = []
    /**
     * @param {character[]} buf destination buffer
     * @param {number} n Number of characters to read
     * @return {number} The number of actual characters read
     */
    return function(buf, n) {
        let count = 0
        while (n > 0) {
            if (iBuf.length == 0) {
                if (read4(iBuf) == 0) return count
            }
            buf.push(iBuf.shift())
            count++
            n--
        }
        return total
    }
}