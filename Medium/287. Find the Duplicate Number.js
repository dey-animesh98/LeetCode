/**
 * Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and uses only constant extra space.

 

Example 1:

Input: nums = [1,3,4,2,2]
Output: 2
Example 2:

Input: nums = [3,1,3,4,2]
Output: 3
 

Constraints:

1 <= n <= 105
nums.length == n + 1
1 <= nums[i] <= n
All the integers in nums appear only once except for precisely one integer which appears two or more times.
 */

//--

{
    var findDuplicate = function (nums) {
        let slow = nums[0]
        let fast = nums[0]

        do {
            slow = nums[slow]
            fast = nums[nums[fast]]
        } while (slow !== fast);

        fast = nums[0]
        while (slow !== fast) {
            slow = nums[slow]
            fast = nums[fast]
        }
        return slow
    };
}


{//two pointer
    function findDuplicate(nums) {

        // Find the intersection point of the two runners.
        let tortoise = nums[0];
        let hare = nums[0];

        do {
            tortoise = nums[tortoise];
            hare = nums[nums[hare]];
        } while (tortoise != hare);

        // Find the "entrance" to the cycle.
        tortoise = nums[0];

        while (tortoise != hare) {
            tortoise = nums[tortoise];
            hare = nums[hare];
        }

        return hare;
    }
}

{//modifies the array
    var findDuplicate = function (nums) {
        while (nums[0] != nums[nums[0]]) {
            let nxt = nums[nums[0]];
            nums[nums[0]] = nums[0];
            nums[0] = nxt;
        }
        return nums[0];

    };
}


