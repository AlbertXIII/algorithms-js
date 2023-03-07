/**
 * @param {number[]} arr
 * @return {number}
 */

var maxNumberOfApples = function(arr) {
    let sum = 0, count = 0
    arr.sort((a, b) => a - b)

    arr.forEach(element => {
        if (sum > 5000) return count - 1
        sum += element
        count++
    })

    if (sum > 5000) return count - 1
    return count
}

const arr = [100, 200, 150, 1000]
const x = maxNumberOfApples(arr)
console.log(x)
