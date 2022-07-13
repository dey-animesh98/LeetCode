/**
 * You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

Return the max sliding window.

 

Example 1:

Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
Example 2:

Input: nums = [1], k = 1
Output: [1]
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
1 <= k <= nums.length
 */
//--

{
    var maxSlidingWindow = function (nums, k) {
        let que = [], max = -Infinity, ans = []

        for (let i = 0; i < k; i++) {
            while (que.length > 0 && nums[i] >= nums[que[que.length - 1]]) {
                que.pop()
            }
            que.push(i)
            if (nums[i] > max) {
                max = nums[i]
            }
        }
        ans.push(max)

        for (let j = k; j < nums.length; j++) {

            while (que.length > 0 &&  nums[j] >=nums[que[que.length - 1]] ) {
                que.pop()
            }
            if (que.length > 0 && que[0] <= j - k) {
                que.shift()
            }
            que.push(j)
            ans.push(nums[que[0]])
        }
        return ans
    };
    console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))
}
