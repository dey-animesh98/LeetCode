/**
 * Given a binary array nums, return the maximum number of consecutive 1's in the array.

 

Example 1:

Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
Example 2:

Input: nums = [1,0,1,1,0,1]
Output: 2
 

Constraints:

1 <= nums.length <= 105
nums[i] is either 0 or 1.
 */

//--
{
    var findMaxConsecutiveOnes = function (nums) {
        let max = 0, curr = 0, i = 0
        while (i < nums.length) {
            if (nums[i] === 1) {
                curr++
                i++
                if (max < curr) max = curr
            } else {
                curr = 0
                i++
            }
        }
        return max
    };
}

{
    var findMaxConsecutiveOnes2 = function(nums) {
        // return  Math.max(...nums.join("").split(0).map(e=> e.length))

        // let a = Math.max(...nums)
        // console.log(a)
        let b= nums.join("")
        console.log(b)
        let c = b.split(0)
        console.log(c)
        let d = c.map(e=>e.length)
        console.log(d)
        return Math.max(...d)

       }
       console.log(findMaxConsecutiveOnes2([1,1,0,1,0,0,0,1,1,1,1,0,1]))
}