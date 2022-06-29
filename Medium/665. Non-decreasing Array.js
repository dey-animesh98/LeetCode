/**
 * Given an array nums with n integers, your task is to check if it could become non-decreasing by modifying at most one element.

We define an array is non-decreasing if nums[i] <= nums[i + 1] holds for every i (0-based) such that (0 <= i <= n - 2).

 

Example 1:

Input: nums = [4,2,3]
Output: true
Explanation: You could modify the first 4 to 1 to get a non-decreasing array.
Example 2:

Input: nums = [4,2,1]
Output: false
Explanation: You can't get a non-decreasing array by modify at most one element.
 

Constraints:

n == nums.length
1 <= n <= 104
-105 <= nums[i] <= 105
 */

// Count distinct pair with given sum
// {
//   const checkPossibility = function(nums) {
//     let swapCount = 0
//     for(let i = 0; i < nums.length-1; i++){
//       for(let j = 1; j< nums.length - i; j++){
//         if(nums[j] < nums[j-1]){
//           let temp = nums[j-1]
//           nums[j-1] = nums[j]
//           nums[j] = temp
//           swapCount++
//         }
//       }
//     }
//     console.log(nums)
//   return swapCount === 1
// };
// // console.log(checkPossibility([4,3,1]))
// }

{
    const checkPossibility = function (nums) {
      let swapCount = 0
      for (let i = 0; i < nums.length - 1; i++) {
        for (let j = 1; j < nums.length - i; j++) {
          if (nums[j] < nums[j - 1]) {
            let temp = nums[j - 1]
            nums[j - 1] = nums[j]
            nums[j] = temp
            swapCount++
            if (swapCount > 1) return false
          }
        }
      }
      return true
    }
    console.log(checkPossibility([4, 3, 1]))
  
  }
  
  var checkPossibility = function (nums) {
    var toChange;
    for (let i = 0; i < nums.length - 1; i++) {
        // Case of number needs to be changed
        if (nums[i] > nums[i + 1]) {
            if (toChange === undefined) {
                // If the number is larger than the next+1 so we will change it
                // Otherwise we will change the number in the next index 
                // (the next index is smaller than its pre and post numbers ex: [3, 4, ->2, 3])
                if (i < nums.length - 2 && nums[i] > nums[i + 2]) {
                    toChange = i;
                } else {
                    toChange = i + 1;
                }
            } else {
                return false;
            }
  
            if (i > 0 && toChange == i && nums[i - 1] > nums[i + 1]) return false;
        }
    }
  
    return true;
  };

  {
    var checkPossibility = function(nums) {
        let changed  =0
        for(let i=0; i<nums.length-1;i++){
            if(nums[i]>nums[i+1]){
                if(changed++ || nums[i-1]>nums[i+1] && nums[i]>nums[i+2]) return false
            }
        }
        return true
    };
  }