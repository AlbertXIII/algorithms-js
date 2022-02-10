MaxStack.prototype.pop = function() {
    let res = this.s.pop()
    this.maxS.pop()
    return res
}

MaxStack.prototype.top = function() {
    return this.s[this.s.length - 1]
}

MaxStack.prototype.peekMax = function() {
    return this.maxS[this.maxS.length - 1]
}

MaxStack.prototype.popMax = function() {
    let tmpM = this.maxS.pop()
    let tmpS = []
    let tmp = this.s.pop()

    while (tmp != tmpM) {
        tmpS.push(tmp)
        tmp = this.s.pop()
        this.push(n)
    }

    return tmpM
}