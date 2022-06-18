/**
 * 1832. Check if the Sentence Is Pangram
Easy

807

21

Add to List

Share
A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

 

Example 1:

Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
Output: true
Explanation: sentence contains at least one of every letter of the English alphabet.
Example 2:

Input: sentence = "leetcode"
Output: false
 

Constraints:

1 <= sentence.length <= 1000
sentence consists of lowercase English letters.
 * 
 */

{//O(n)
    var checkIfPangram = function (sentence) {
        let map = {}
        for (let i = 0; i < sentence.length; i++) {
            map[sentence[i]] = (map[sentence[i]] || 0) //+1
        }
        return Object.keys(map).length === 26 ? true : false
    };
}
//--
{//O(n)
    var checkIfPangram = function (sentence) {
        if (sentence.length < 26) return false
        let map = {}, count = 0
        for (let i = 0; i < sentence.length; i++) {
            if (!map.hasOwnProperty([sentence[i]])) {
                map[sentence[i]] = (map[sentence[i]] || 1)
                count++
            }
        }
        return count === 26 ? true : false
    };
}

//One Liner
{
    const checkIfPangram = sentence => { return (new Set(sentence).size == 26) }
}