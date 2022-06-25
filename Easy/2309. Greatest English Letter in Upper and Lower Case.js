var greatestLetter = function (s) {
    let UCA = Array(26).fill(0)
    for (let str of s) {
        if (str <= "Z") {
            UCA[str.charCodeAt(0) - "A".charCodeAt(0)] = 1
        }
    }
    let maxIndex = -1
    for (let i = 0; i < s.length; i++) {
        let str = s[i]
        if (str >= "a") {
            if (UCA[str.charCodeAt(0) - "a".charCodeAt(0)] === 1) {
                if ([str.charCodeAt(0) - "a".charCodeAt(0)] > maxIndex) {
                    maxIndex = str.charCodeAt(0) - "a".charCodeAt(0)
                }
            }
        }
    }
    return maxIndex === -1 ? "" : String.fromCharCode(maxIndex + 65)

};
// console.log(greatestLetter('AbCdEfGhIjK'))


{
    const greatestLetter = function (s) {
        let set = new Set(s.split(""));
        for (let i = 90; i >= 65; i--) {
            if (set.has(String.fromCharCode(i)) && set.has(String.fromCharCode(i + 32))) {
                return String.fromCharCode(i);
            }
        }
        return "";
    };
    console.log(greatestLetter('AbCdEfFGhIjK'))

}



