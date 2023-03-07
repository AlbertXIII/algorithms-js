let TwoSum = function() {
    this.map = {}
}

TwoSum.prototype.add = function(num) {
    if (this.map[num]) this.map[num]++
    else this.map[num] = 1
}

TwoSum.prototype.find = function(val) {
    for (let key in this.map) {
        let num1 = key - 0
        let num2 = val - num1
        if (this.map[num2]) {
            if (num1 != num2 || this.map[num2] > 1) return true 
        }
    }
    return false
}