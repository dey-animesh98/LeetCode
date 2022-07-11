/**
 * Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

 

Example 1:

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Example 2:

Input: nums = [2,0,1]
Output: [0,1,2]
 

Constraints:

n == nums.length
1 <= n <= 300
nums[i] is either 0, 1, or 2.
 */

//-
{//Brute Force
    const sortColors = function (nums) {
        let map = new Map(), i = 0
        for (let ele of nums) {
            map.set(ele, map.get(ele) + 1 || 1)
        }

        while (map.get(0) > 0) {
            nums[i] = 0
            i++
            map.set(0, map.get(0) - 1)
        }
        while (map.get(1) > 0) {
            nums[i] = 1
            i++
            map.set(1, map.get(1) - 1)
        }
        while (map.get(2) > 0) {
            nums[i] = 2
            i++
            map.set(2, map.get(2) - 1)
        }
        return nums

    };
    // console.log(sortColors([1, 0, 2, 0, 1, 1, 0, 0, 2, 1]))
}

//--
{

    const sortColors = (nums) => {
        let swapped = true;
        while (swapped === true) {
          swapped = false;
          for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] > nums[i + 1]) {
              let temp = nums[i];
              nums[i] = nums[i + 1];
              nums[i + 1] = temp;
              swapped = true;
            }
          }
        }
        return nums;
      };
      console.log(sortColors([1, 0, 2, 0, 1, 1, 0, 0, 2, 1,5,45,4,7,9,7,2,12,15]))

}