/**
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.

 

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Example 2:

Input: nums = [1]
Output: 1
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
 

Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
 */

//--Kadane's Algo
{
    var maxSubArray = function (nums) {
        let currSum = 0, maxSum = nums[0] //-Infinity
        for (let ele of nums) {
            currSum += ele
            maxSum = currSum > maxSum ? currSum : maxSum
            currSum = currSum < 0 ? 0 : currSum
        }
        return maxSum
    };
    console.log(maxSubArray([2, 3, -4, 1, -5, 4, 2, 1, -3, 1]))

}

//--DP
{
    var maxSubArray = function (nums) {
        let dp = []; // dp[i] = max sum of subarray ending at i
        let max = nums[0];
        dp[0] = nums[0] > 0 ? nums[0] : 0;
        for (let i = 1; i < nums.length; i++) {
            // max = Math.max((prev max + curr), curr)
            dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
            max = Math.max(max, dp[i]);
        }
        return max;
    };
}

