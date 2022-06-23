//Strobogrammatic Numbers 69 96 11 00 88

let findStrob = function(n) {
    let recur = function(m) {
        if (m == 0) return [""]
        else if (m == 1) return ["0", "1", "8"]
        let list = recur(m-2)
        let newList = []
        for (let key in list) {
            if (m != n) newList.push("0" + list[key] + "0")
            newList.push("1" + list[key] + "1")
            newList.push("6" + list[key] + "9")
            newList.push("8" + list[key] + "8")
            newList.push("9" + list[key] + "6")
        }
        return newList
    }
    return recur(n)
}

console.log(findStrob(2))