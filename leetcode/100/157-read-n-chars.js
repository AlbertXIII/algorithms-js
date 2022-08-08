let solution = function(read4) {
    /**
     * @param {character[]} buf destination buffer
     * @param {number} n Number of characters to read
     * @return {number} The number of actual characters read
     */
    return function(buf, n) {
        let tmp = []
        let total = 0
        let eof = false
        while (!eof && total < n) {
            let count = read4(tmp)
            eof = count < 4
            count = Math.min(count, n - total)
            for (let i = 0; i < count; i++) {
                buf[total++] = tmp[i]
            }
        }
        return total
    }
}