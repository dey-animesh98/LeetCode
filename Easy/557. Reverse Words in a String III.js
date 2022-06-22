/**
 * 557. Reverse Words in a String III
Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
Example 1:

Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
Example 2:

Input: s = "God Ding"
Output: "doG gniD"
 

Constraints:

1 <= s.length <= 5 * 104
s contains printable ASCII characters.
s does not contain any leading or trailing spaces.
There is at least one word in s.
All the words in s are separated by a single space.
 */

//--
{
    const reverseWords = function (s) {
        let arr = s.split(' '), rev = []
        for (let i = 0; i < arr.length; i++) {
            let str = arr[i].split('').reverse().join('')
            rev.push(str)
        }
        return rev.join(' ')
    };
}
//--
{
    const reverseWords = function (s) {
        let arr = s.split(' '), rev = []
        for (let i = 0; i < arr.length; i++) {
            let str = arr[i].split('')

            let start = 0, end = str.length - 1
            while (start < end) {
                let temp = str[start]
                str[start] = str[end]
                start++
                str[end] = temp
                end--
            }
            rev.push(str.join(''))
        }
        return rev.join(' ')
    };
    // console.log(reverseWords("Let's take LeetCode contest"))
}
////////////
// {
//     function divBy5(arr) {
//         if (arr.length == 0) return
//         else {
//             let ele = arr.pop()
//             if (ele % 5 == 0) {
//                 console.log(ele)
//             }
//         }
//         divBy5(arr)
//     }
//     // divBy5([10,11,14,20,21,25])
// }
// {
//     const reverseWords = function (s) {
//         let arr = s.split(' '), rev = []
//         if (arr.length == 0) return
//         else {
//             let str = arr.pop().split('')
//             let start = 0, end = str.length - 1
//             while (start < end) {
//                 let temp = str[start]
//                 str[start] = str[end]
//                 start++
//                 str[end] = temp
//                 end--
//             }
//             rev.push(str.join(''))
//             // console.log(rev.join(' '))
//         }

//         reverseWords(arr)
//          return rev.join(' ')
//     };
//     console.log(reverseWords("Let's take LeetCode contest"))
// }