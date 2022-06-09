/**
 34. Find First and Last Position of Element in Sorted Array
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
If target is not found in the array, return [-1, -1].
You must write an algorithm with O(log n) runtime complexity.
Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]
Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums is a non-decreasing array.
-109 <= target <= 109
 */

//--BruteForce
{
    const searchRange = function (nums, target) {
        let temp = []
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] == target) {
                temp.push(i)
                if (nums[i] > target)
                    break;
            }
        }
        if (temp.length == 0) {
            return [-1, -1]
        }
        return [temp[0], temp[temp.length - 1]]
    }
    // console.log(searchRange([5, 7, 7, 8, 8, 10], 8))
}

//--
{
    const searchRange = function (nums, target) {
        if (nums.length === 0) {
            return [-1, -1]
        }
        let temp = []
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === target) {
                temp.push(i)
                break;
            }
            if (i === nums.length - 1) {
                break;
            }
        }

        for (let j = nums.length - 1; j < nums.length; j--) {
            if (nums[j] === target) {
                temp.push(j)
                break;
            }
            if (j === 0) {
                break;
            }
        }
        if (temp.length === 0) {
            return [-1, -1]
        }
        return temp
    }
    // console.log(searchRange([], 0))

}

//--Binary Search
{
    const searchRange = function (nums, target) {
        let start = 0
        let end = nums.length - 1
        let ans = [-1, -1]
        //finding Left
        while (start <= end) {
            let mid = Math.floor((start + end) / 2)
            if (target === nums[mid] || target < nums[mid]) {
                end = mid - 1
            }
            if (target > nums[mid]) {
                start = mid + 1
            }
            if (target === nums[start]) {
                ans[0] = start
            }
        }

        start = 0
        end = nums.length - 1
        //Find Right
        while (start <= end) {
            let mid = Math.floor((start + end) / 2)
            if ( target < nums[mid]) {
                end = mid - 1
            }
            if (target > nums[mid] || target === nums[mid]) {
                start = mid + 1
            }
            if (target === nums[end]) {
                ans[1] = end
            }
        }
        return ans
    }
    // console.log(searchRange([], 0))
}

//Short Cut🤣😂😂🤣
{
    const searchRange = function(nums, target) {
        let result=[];
        let firstIndex=nums.indexOf(target);
        let lastIndex=nums.lastIndexOf(target);
        
        result.push(firstIndex);
        result.push(lastIndex);
        
        return result;
        };
}

{//All test cases not passes 88/66
    const searchRange = function(nums, target) {
        let OutputArray = [-1,-1];
       let count=-1;
       for(i=0; i<nums.length; i++){
       if(nums[i]=== target){
           count++;
           OutputArray[count] = i;
        }
    }
    return [OutputArray[0], OutputArray[OutputArray.length-1]]
    };
    let arrays = [77,88,88,99]
    let need = 88
    console.log(searchRange(arrays, need))
}