/**
 * Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.
Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
 

Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
 */
//--
{
    var longestConsecutive = function (nums) {
        if (nums.length == 0) return 0
        nums.sort((a, b) => a - b)
        let longestSeq = 1
        let curr = 1
        let previousEle = nums[0]
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] === 1 + previousEle) {
                curr++
            } else if (nums[i] !== previousEle) {
                curr = 1
            }

            previousEle = nums[i]
            if (curr > longestSeq) {
                longestSeq = curr
            }
        }
        return longestSeq
    };
    console.log(longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]))
}