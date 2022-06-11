/*
15. 3Sum
Medium

18396

1771

Add to List

Share
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Example 2:

Input: nums = []
Output: []
Example 3:

Input: nums = [0]
Output: []
 

Constraints:

0 <= nums.length <= 3000
-105 <= nums[i] <= 105
*/
//--
{ //Get error in final submit
    var threeSum = function(nums) {
        let arr =[]
        let n = nums.length
        nums.sort()
          for(let i=0; i<n;i++){
            for(let j=i+1; j<n; j++){
              for(let k=j+1; k<n;k++){
                if(nums[i]+nums[j]+nums[k]==0){
                  arr.push([nums[i],nums[j],nums[k]])
                }
              }
            }
          }
        arr = arr.map(JSON.stringify).filter((el, i , ar)=> i === ar.indexOf(el)).map(JSON.parse)
        return arr
      };
}
// 318/316 Test cases passed
{
    const threeSum = function(nums) {
        let arr =[]
        let n = nums.length
        nums.sort()
          for(let i=0; i<n;i++){
            for(let j=i+1; j<n; j++){
              for(let k=j+1; k<n;k++){
                if(nums[i]+nums[j]+nums[k]==0){
                  arr.push([nums[i],nums[j],nums[k]])
                }
              }
            }
          }
        arr = Array.from(new Set(arr.map(JSON.stringify)),JSON.parse)
        return arr
      };
}
//--
{
    const threeSum = function(nums) {
        if (nums.length < 3) return [];
        nums.sort((a, b) => a - b);
        const results = [];
        for (let i = 0; i < nums.length - 1; i++) {
            let l = i + 1, r = nums.length - 1;
            while (l < r) {
                let sum = nums[i] + nums[l] + nums[r];
                if (sum < 0) l++;
                else if (sum > 0) r--;
                else {
                    results.push([nums[i], nums[l], nums[r]]);
                    while (nums[i] === nums[i + 1]) i++;
                    while (nums[l] === nums[l + 1]) l++;
                    while (nums[r] === nums[r - 1]) r--;
                    l++; r--;
                }
            }
        }
        // console.log(results);
        return results;
    };
}