/**
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.
Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 

Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
 */
//--
{
    const moveZeroes = function (nums) {
        let count = 0
        for (let i = 0; i < nums.length-count; i++) {
            if (nums[i] === 0) {
                nums.splice(i, 1)
                nums.push(0)
                count++
                i--
            }
        }
        return nums
    };
    // console.log(moveZeroes([0, 1,12,1,4,5,7,8,6, 0,0,0,0,6,6,1,0,7,9,0,0,0,2,1,0,0,0, 3, 12]))
    // console.log(moveZeroes([0]))

}

//--
{
    const moveZeroes = function(nums) {
        let lastNonZeroFoundAt = 0;
        for (let i = 0; i < nums.length; ++i) {
            if (nums[i] !== 0) {
                [nums[lastNonZeroFoundAt], nums[i]] = [nums[i], nums[lastNonZeroFoundAt]];
                lastNonZeroFoundAt++;
            }
        }
    };
        // console.log(moveZeroes([0, 1,12,1,4,5,7,8,6, 0,0,0,0,6,6,1,0,7,9,0,0,0,2,1,0,0,0, 3, 12]))

}

//--
{
    const moveZeroes = function(nums) {
        let start = 0;
        let end = nums.length - 1;
    
        while(start < end){
            if(nums[start] === 0){
              nums.push(0);
              nums.splice(start, 1);
              end--;
    
            } else {
              start++;
            }
        }
    };
}

