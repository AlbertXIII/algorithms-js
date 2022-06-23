//Strobogrammatic Numbers 69 96 11 00 88

let isStrob = function(num) {
    let n = num.length
    for (let i = 0, j = n-1; i <= j; i++, j--) {
        let c = num[i] + '' + num[j] + ''
        if (c != '00' && c != '11' & c != '88' && c != '69' && c != '96')
            return false 
    }
    return true
}

console.log(isStrob(69))