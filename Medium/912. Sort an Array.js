/**
 * 
 * Given an array of integers nums, sort the array in ascending order.

 

Example 1:

Input: nums = [5,2,3,1]
Output: [1,2,3,5]
Example 2:

Input: nums = [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]
 

Constraints:

1 <= nums.length <= 5 * 104
-5 * 104 <= nums[i] <= 5 * 104
 */

//--Ascending Order

{
    const merge = function (arr1, arr2) {
        let result = []
        let i = 0
        let j = 0
        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] <= arr2[j]) { //  for descending => if (arr1[i] >= arr2[j]) {
                result.push(arr1[i])
                i++
            } else {
                result.push(arr2[j])
                j++
            }
        }
        while (i < arr1.length) {
            result.push(arr1[i])
            i++
        }
        while (j < arr2.length) {
            result.push(arr2[j])
            j++
        }
        return result
    }

    const sortArray = function (nums) {
        if (nums.length === 1) return nums
        let mid = Math.floor(nums.length / 2)

        let left = sortArray(nums.slice(0, mid))
        let right = sortArray(nums.slice(mid))

        return merge(left, right)
    };

    console.log(sortArray([5,78,-7,12,45,75,15,12,23,28]))
}

