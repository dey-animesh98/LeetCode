/**
 * 2269. Find the K-Beauty of a Number
The k-beauty of an integer num is defined as the number of substrings of num when it is read as a string that meet the following conditions:

It has a length of k.
It is a divisor of num.
Given integers num and k, return the k-beauty of num.

Note:

Leading zeros are allowed.
0 is not a divisor of any value.
A substring is a contiguous sequence of characters in a string.

 

Example 1:

Input: num = 240, k = 2
Output: 2
Explanation: The following are the substrings of num of length k:
- "24" from "240": 24 is a divisor of 240.
- "40" from "240": 40 is a divisor of 240.
Therefore, the k-beauty is 2.
Example 2:

Input: num = 430043, k = 2
Output: 2
Explanation: The following are the substrings of num of length k:
- "43" from "430043": 43 is a divisor of 430043.
- "30" from "430043": 30 is not a divisor of 430043.
- "00" from "430043": 0 is not a divisor of 430043.
- "04" from "430043": 4 is not a divisor of 430043.
- "43" from "430043": 43 is a divisor of 430043.
Therefore, the k-beauty is 2.
 

Constraints:

1 <= num <= 109
1 <= k <= num.length (taking num as a string)
 * 
 */

{//181 /131 test cases passed 😫😫😫😫 O(n^2)
    var divisorSubstrings = function (num, k) {
        let count = 0
        let lastDigit = num % 10
        let nums = Math.floor(num / 10)
        let divisor = +''
        num += ''
        for (let i = 0; i < num.length; i++) {
            for (let j = i; j < i + k; j++) {
                divisor += num[j]
            }
            if (lastDigit == 0) {
                if (nums * 10 % divisor == 0)
                    count++
                divisor = +''
            } else if (lastDigit != 0) {
                let n = Math.abs(nums + (lastDigit * 13))
                if (n % divisor == 0) {
                    count++
                    divisor = +''
                }
                else {
                    divisor = +''
                }
            }
        }
        return count

    };

}
//--
{//Sliding Window O(n) 😍😍😍
    const divisorSubstrings = (num, k) => {
        let numS = num + '', count = 0;
        for (let i = 0; i < numS.length - k + 1; i++) {
            let divisor = +(numS.slice(i, k + i))
            if (num % divisor === 0) count++
        }
        return count
    };
    console.log(divisorSubstrings(240, 2))
}

