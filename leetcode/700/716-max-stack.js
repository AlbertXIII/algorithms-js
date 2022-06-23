let MaxStack = function() {
    this.s = []
    this.maxS = []
}

MaxStack.prototype.push = function(x) {
    this.s.push(x)
    if (this.maxS.length < 1) this.maxS.push(x)
    else {
        let tmp = Math.max(this.maxS[this.maxS.length - 1], x)
        this.maxS.push(tmp)
    }
}

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