/**
 * Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.
Example 1:

Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]
Example 2:

Input: nums = [1,1]
Output: [2]
 

Constraints:

n == nums.length
1 <= n <= 105
1 <= nums[i] <= n
 

Follow up: Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.
 */

{
    const findDisappearedNumbers = function (nums) {
        let n = nums.length, res = []
        let arr = Array(n + 1).fill(false)

        for (let ele of nums) {
            arr[ele] = ele
        }
        for (let i = 1; i < arr.length; i++) {
            if (!arr[i]) res.push(i)
        }
        return res
    };

    // console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]))
}
//--
{
    const findDisappeared = function (nums) {
        let set = new Set(nums), res = []
        for (let i = 1; i <= nums.length; i++) {
            if (!set.has(i)) {
                res.push(i);
            }
        }
        return res
    }
    console.log(findDisappeared([1, 2, 3, 5, 2, 6, 7]))
}
