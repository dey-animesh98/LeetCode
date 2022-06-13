/*
35. Search Insert Position
Easy

8152

419

Add to List

Share
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104
*/
//--
{
    var searchInsert = function (nums, target) {
        let start = 0
        let end = nums.length - 1
        while (start <= end) {
            let mid = Math.floor(start + (end - start) / 2)

            if (target < nums[mid]) {
                end = mid - 1

            } else if (target > nums[mid]) {
                start = mid + 1

            } else {
                return mid
            }
        }
        return start
    };
}
///////////////////////////////////////////////////////////
{
    function largestOfFour(arr) {
        let newArr = []
        for(let i=0;i<arr.length;i++){
             let maxsum= 1/-0
         for(let j =0;j<arr[i].length;j++){
           if(maxsum<arr[i][j])
             maxsum = arr[i][j]
         }
         newArr.push(maxsum)
        }
        return newArr
      }
      largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])
      
}

//mergeSort(n log n), bubble sort