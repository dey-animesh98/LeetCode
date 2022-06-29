/**
 * You are given a 0-indexed integer array nums and a target element target.

A target index is an index i such that nums[i] == target.

Return a list of the target indices of nums after sorting nums in non-decreasing order. If there are no target indices, return an empty list. The returned list must be sorted in increasing order.

 

Example 1:

Input: nums = [1,2,5,2,3], target = 2
Output: [1,2]
Explanation: After sorting, nums is [1,2,2,3,5].
The indices where nums[i] == 2 are 1 and 2.
Example 2:

Input: nums = [1,2,5,2,3], target = 3
Output: [3]
Explanation: After sorting, nums is [1,2,2,3,5].
The index where nums[i] == 3 is 3.
Example 3:

Input: nums = [1,2,5,2,3], target = 5
Output: [4]
Explanation: After sorting, nums is [1,2,2,3,5].
The index where nums[i] == 5 is 4.
 

Constraints:

1 <= nums.length <= 100
1 <= nums[i], target <= 100
 */

//--
{
    var targetIndices = function (nums, target) {
        let temp = []
        nums.sort((a, b) => a - b)
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === target) {
                temp.push(i)
            } else if (nums[i] > target) {
                break
            }
        }
        return temp
    };
}


{
    var targetIndices = function (nums, target) {
        nums.sort(function (a, b) { return a - b })
       



        let result = [],  i = 0
        while (nums[i] <= target) {
            if (nums[i] === target) {
                result.push(i)
            }
            i++
        }
        return result
    };
}


//Python solution need to imple in JS
{/*
    nums.sort()
    
    l, r= 0, len(nums) - 1
    myArray=[]
    
    while l<=r:
        mid = (l+r)//2
        if nums[mid]<target:
            l = mid + 1
        if nums[mid]>target:
            r = mid-1
        if nums[mid]==target:
            if nums[l]<target:
                l = l + 1
            if nums[r]>target:
                r = r -1 
            if nums[l]==target and nums[r]==target:
                myArray.append(l)
                l+=1
    return myArray*/
}