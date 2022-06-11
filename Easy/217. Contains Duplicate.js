/*
217. Contains Duplicate
Easy

5021

963

Add to List

Share
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
*/

//--Shorcut 
{
    const containsDuplicate = function (nums) {
        let l1 = nums.length
        let l2 = [...new Set(nums)].length
        return l1 == l2 ? false : true
    };
}
{
    const containsDuplicate = function (nums) {
        nums.sort((a, b) => a - b)
        let l = 0, r =  1
        while (r <= nums.length) {
            if (nums[l] == nums[r]) {
                return true
            } else {
                l++
                r++
            }
        }
        return false
    };
    console.log(containsDuplicate(
        [1,1,1,3,3,4,3,2,4,2]))
}