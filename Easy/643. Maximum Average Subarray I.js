/**
 * 643. Maximum Average Subarray I
You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. 
Any answer with a calculation error less than 10-5 will be accepted.
Example 1:

Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
Example 2:

Input: nums = [5], k = 1
Output: 5.00000
 

Constraints:

n == nums.length
1 <= k <= n <= 105
-104 <= nums[i] <= 104
 */
//--
{ //Sliding Window O(n)
    const findMaxAverage = function (nums, k) {
        let maxAvg = 0, avgOfK = 0, sum = 0
        for (let i = 0; i < k; i++) {
            sum += nums[i]
        }
        avgOfK = (sum / k)
        maxAvg = avgOfK
        for (let j = k; j < nums.length; j++) {
            sum += nums[j] - nums[j - k]
            avgOfK = (sum / k)
            maxAvg = avgOfK > maxAvg ? avgOfK : maxAvg
        }

        return maxAvg
    };
    // console.log(findMaxAverage([5], 1))
}

let num = 430043
let div = [43,30,00,4,43]

let n = Math.abs(43004+(3 * 13));
console.log(n%43)
var divisorSubstrings = function(num, k) {
    let count = 0
    let lastDigit = num % 10
    let nums = Math.floor(num /10)
    let divisor = parseInt('') 
    num += ''
    for(let i=0; i<num.length; i++){
      for(let j=i; j<k; j++){
        divisor += num[j]
      }
      let n = Math.abs(nums+(lastDigit*13))
      if(n%divisor==0){
        count++
        divisor = parseInt('')
      }
    }
   return count
    
  };