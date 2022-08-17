/**
 * Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

Example 1:

Input: s = "leetcode"
Output: 0
Example 2:

Input: s = "loveleetcode"
Output: 2
Example 3:

Input: s = "aabb"
Output: -1
 

Constraints:

1 <= s.length <= 105
s consists of only lowercase English letters.
 */

//--
{
    const firstUniqChar = function (s) {
        let map = new Map()

        for (let ele of s) {
            map.set(ele, map.get(ele) + 1 || 1)
        }

        for (let pairs of map) {
            if (pairs[1] === 1) return s.indexOf(pairs[0])
        }
        return -1
    };
}

{
    const firstUniqChar = function (s) {
        let map = new Map(), seenSet = new Set()

        for (let i = 0; i < s.length; i++) {
            if (!seenSet.has(s[i])) {
                seenSet.add(s[i])
                map.set(s[i], i)
            } else {
                map.delete(s[i])
            }
        }

        for (let pairs of map) {
            if (pairs) return pairs[1]
        }
        return -1
    };

    console.log(firstUniqChar('hhggftuddujs'))
}