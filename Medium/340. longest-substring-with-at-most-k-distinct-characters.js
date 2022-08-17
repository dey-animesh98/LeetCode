function maxSubStr(str, k) {
    let map = new Map(), start = 0, maxWin = 0

    for (let end = 0; end < str.length; end++) {
        map.set(str[end], map.get(str[end]) + 1 || 1)
        while (map.size > k) {
            let leftChar = str[start]
            if (map.get(leftChar) > 1) {
                map.set(leftChar, map.get(leftChar) - 1)
            } else {
                map.delete(leftChar)
            }
            start++
        }

        maxWin = Math.max(maxWin, end - start + 1)
    }
    return maxWin
}

console.log(maxSubStr("ebcba", 2))