/**
 * Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

 

Example 1:

Input: nums = [3,2,3]
Output: [3]
Example 2:

Input: nums = [1]
Output: [1]
Example 3:

Input: nums = [1,2]
Output: [1,2]
 

Constraints:

1 <= nums.length <= 5 * 104
-109 <= nums[i] <= 109
 */

//--My SOL

{
    var majorityElement = function (nums) {
        let map = new Map(),
            m = nums.length / 3,
            res = [];
        for (let ele of nums) {
            map.set(ele, map.get(ele) + 1 || 1);
        }

        for (let pairs of map) {
            if (pairs[1] > m) res.push(pairs[0]);
        }
        return res;
    };
}

//Boyer moore voting algo [TC-O(2n), SC-O(1)]
{
    var majorityElement = function (nums) {
        let ele1 = -1,
            ele2 = -1,
            count1 = 0,
            count2 = 0,
            res = [];

        for (let i = 0; i < nums.length; i++) {
            
            if (ele1 === nums[i]) count1++;
            else if (ele2 === nums[i]) count2++;
            else if (count1 === 0) {
                ele1 = nums[i];
                count1++;
            } else if (count2 === 0) {
                ele2 = nums[i];
                count2++;
            } else {
                count1--;
                count2--;
            }
        }

        let e1Count = 0,
            e2Count = 0,
            m = nums.length / 3;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === ele1) e1Count++;
            else if (nums[i] === ele2) e2Count++;
        }

        if (e1Count > m) res.push(ele1);
        if (e2Count > m) res.push(ele2);
        return res;
    };
}
