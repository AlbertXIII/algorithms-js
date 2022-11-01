/**
 * 
 * @param {NestedInteger[]} nestedList
 * @return {number} 
 */
let depthSum = function(nestedList) {
    let res = 0
    let recur = function(dep, list) {
        for (let i = 0; i < list.length; i++) {
            let c = list[i]
            if (c.isInteger()) res+= c.getInteger() * dep
            else recur(dep+1, c.getList())
        }
    }
    recur(1, nestedList)
    return res   
}

let nestedList1 = [[1,1],2,[1,1]]
console.log(depthSum(nestedList1))