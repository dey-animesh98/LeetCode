/*
205. Isomorphic Strings
Easy

3664

658

Add to List

Share
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

Example 1:
Input: s = "egg", t = "add"
Output: true

Example 2:
Input: s = "foo", t = "bar"
Output: false

Example 3:
Input: s = "paper", t = "title"
Output: true

Constraints:
1 <= s.length <= 5 * 104
t.length == s.length
s and t consist of any valid ascii character.
*/
{ //43/35 test case passed

    var isIsomorphic = function (s, t) {
        let hashOfs = {}, hashOft = {}
        for (let i = 0; i < s.length; i++) {
            hashOfs[s[i]] = hashOfs[s[i]] ? hashOfs[s[i]] += 1 : 1
        }

        for (let j = 0; j < t.length; j++) {
            hashOft[t[j]] = hashOft[t[j]] ? hashOft[t[j]] += 1 : 1
        }
        let valOfs = Object.values(hashOfs).sort().join(",")
        let valOft = Object.values(hashOft).sort().join(",")
        if (valOfs == valOft) return true
        return false
    };
}

{// O(n) 98% faster 83 memory
    const isIsomorphic = function(s, t) {
        let hashS= {}, hashT={}
        for(let i=0; i < s.length; i++){
          let charS = s[i]
          let charT = t[i]
        
          if(!hashT[charT]){
                hashT[charT] = charS
            }
            if(!hashS[charS]){
                hashS[charS] = charT
            }
            if( hashS[charS] !== charT || hashT[charT]!==charS){
                return false
          }
        }
      return true
    };
}

//--Some Addition Array methods
{
    let a = [1, 2, 3]
    let b = [1, 2, 3]
    // console.log(a==b) //false

    var array1 = [10, 6, 19, 16, 14, 15, 2, 9, 5, 3, 4, 13, 8, 7, 1, 12, 18, 11, 20, 17];
    var array2 = [12, 18, 20, 11, 19, 14, 6, 7, 8, 16, 9, 3, 1, 13, 5, 4, 15, 10, 2, 17];

    if (array1.sort((a,b)=>a-b).join('') === array2.sort((a,b)=>a-b).join('')) {
        console.log('same members');
    }
    else console.log('not a match');
}

