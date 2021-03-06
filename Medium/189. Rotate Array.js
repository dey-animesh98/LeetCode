/**
 * 
189. Rotate Array

Given an array, rotate the array to the right by k steps, where k is non-negative.
Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:
Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
 

Constraints:

1 <= nums.length <= 105
-231 <= nums[i] <= 231 - 1
0 <= k <= 105
 

Follow up:

Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
Could you do it in-place with O(1) extra space?
 */




{
  function revArr(arr, start, end) {

    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]]
      start++
      end--
    }
    return arr
  }

  var rotate = function (nums, k) {
    k = k % nums.length

    let start = 0
    let end = nums.length - 1
    revArr(nums, start, end)

    start = 0
    end = k - 1
    revArr(nums, start, end)

    start = k
    end = nums.length - 1
    revArr(nums, start, end)

    return nums

  }
}
//--

{
  {

    function rev(arr) {
      let i = 0, j = arr.length - 1
      while (i < j) {
        arr[i] = arr[i] + arr[j]
        arr[j] = arr[i] - arr[j]
        arr[i] = arr[i] - arr[j]
        i++
        j--
      }
      return arr
    }
    function rotateArr(arr, k) {
      if (k > arr.length) {
        k = k % arr.length
      }
      let roated = rev(arr)
      let firstR = rev(roated.slice(0, k))
      let lastR = rev(roated.slice(k))
      return [...firstR, ...lastR]
    }

    // console.log(rotateArr([1, 2, 3, 4, 5, 6, 7],2))
  }
}
//--
{
  const rotate = function (nums, k) {
    let n = nums.length - 1
    for (let i = n - 1; i >= n - k; i--) {
      let ele = nums.pop()
      nums.unshift(ele)
    }
    return nums
  };
}
//--
{
  const rotate = function (nums, k) {
    if (nums.length < k) k = k % nums.length;

    const temp = nums.splice(nums.length - k, k);
    nums.unshift(...temp);

    return nums
  }
  // console.log(rotate([1,2,3,4,5,6,7], 3))

}





{
  var rotate = function (nums, k) {
    if (nums.length < k) {
      k = k % nums.length
    }
    let start = nums.length - k, end = nums.length - 1
    while (start < end) {
      let temp = nums[start]
      nums[start] = nums[end]
      nums[end] = temp
      start++
      end--
    }
    let kth = nums.splice(-k)

    return [...kth, ...nums]

  }
  console.log(rotate([1, 2, 3, 4, 5, 6, 7], 7))
}