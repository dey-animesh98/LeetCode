/**
 * 
 */

{
    const missingNumber = function (nums) {
        let n = nums.length
       let sumOfArr = n*(n+1)/2
       for(let i=0; i<n; i++){
        sumOfArr -= nums[i]
       }
       return sumOfArr
    };
    console.log(missingNumber([0,1]))
}

//-
{
    function sum(arr) {
        arr.sort((a, b) => a - b)
        let n = arr.length
        let sum = 0
        for (let i = arr[0]; i <= arr[n - 1]; i++) {
            sum += i
        }
        for (let j = 0; j < n; j++) {
            sum -= arr[j]
        }
        return sum
    }
    console.log(sum([11, 12,14]))
}
//
{//bit manipulation
    var missingNumber = function(arr) {
        let ans = 0;
         for(let i=0; i<arr.length; i++){
             ans = ans^i^arr[i];
         }
         return ans^arr.length;
     };
}