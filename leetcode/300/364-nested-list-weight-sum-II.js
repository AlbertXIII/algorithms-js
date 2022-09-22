/**
 * 
 * @param {NestedInteger[]} nestedList
 * @return {number} 
 */
let depthSumInverse = function(nestedList) {
    let weighted = 0, unweighted = 0, list = nestedList
    while (list.length > 0) {
        let nextLvList = []
        for (let i = 0; i < list.length; i++) {
            let c = list[i]
            if (c.isInteger()) unweighted += c.getInteger()
            else nextLvList = nextLvList.concat(c.getList())
        }
        weighted = weighted + unweighted
        list = nextLvList
    }
    return weighted
}

let nestedList1 = [[1,1],2,[1,1]]
console.log(depthSumInverse(nestedList1))