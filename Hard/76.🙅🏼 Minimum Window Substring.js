/**
 Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

A substring is a contiguous sequence of characters within the string.

 

Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
Example 2:

Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.
Example 3:

Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.
 

Constraints:

m == s.length
n == t.length
1 <= m, n <= 105
s and t consist of uppercase and lowercase English letters.
 

Follow up: Could you find an algorithm that runs in O(m + n) time?
 */


var minWindow = function (s, t) {
    // Need to do next
    let i = 0, j = 0, minWin = Infinity, res = ''
    let strMap = new Map(), currWinMap = new Map()

    for (let ele of t) {
        strMap.set(ele, strMap.get(ele) + 1 || 1)
    }

    let strLength = strMap.size
    while (j < s.length) {
        let expandChar = s[j]
        strMap.set(expandChar, strMap.get(expandChar) - 1)
        if (strMap.get(expandChar) === 0) strLength--

        while (strLength === 0) {
            if (!res || res.length > j - i + 1) {
                res = s.slice(i, j + 1)
            }
            const compressChar = s[i];
            if (strMap.get(compressChar) === 0) {
                strLength++;
            }
            strMap.set(compressChar, strMap.get(compressChar) + 1);
            i++;

        }

        j++;
    }

    return res;

};

console.log(minWindow('aabbcc', 'abc'))