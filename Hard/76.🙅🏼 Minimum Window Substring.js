function minWindow(str) {

    let strMap = new Map()
    for (let ele of str) {
        strMap.set(ele, 1)
    }

    let windowMap = new Map()
    let start = 0, end = 0, maxWindow = 0, currWindow = 0
    while (end < str.length) {
        if (windowMap.get(str[start])) {
            windowMap.set(str[start], windowMap.get(str[start]) + 1)
        } else {
            windowMap.set(str[start], 1)
        }
        start++
        end++
    }
}

console.log(minWindow('aabbcc'))