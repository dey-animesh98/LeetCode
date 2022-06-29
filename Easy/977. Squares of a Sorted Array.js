/**
 * 977. Squares of a Sorted Array

Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums is sorted in non-decreasing order.
 * 
 */
//--One liner O(n)
{
    const sortedSquares = function (nums) {
        return nums.map(e => Math.abs(e * e)).sort((a, b) => a - b)
    };
}


{//Solution is running but in llarge input not working
    function pow(arr) {
        let temp = []
        if (arr.length === 0) {
            return []
        }
        let s = arr[0] * arr[0]
        temp.push(s)
        return temp.concat(pow(arr.slice(1))).sort((a, b) => a - b)
    }

    console.log(pow([2, 6, 4]))
}