/**
 852. Peak Index in a Mountain Array
Let's call an array arr a mountain if the following properties hold:

arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... arr[i-1] < arr[i]
arr[i] > arr[i+1] > ... > arr[arr.length - 1]
Given an integer array arr that is guaranteed to be a mountain, 
return any i such that arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].
Example 1:

Input: arr = [0,1,0]
Output: 1
Example 2:

Input: arr = [0,2,1,0]
Output: 1
Example 3:

Input: arr = [0,10,5,2]
Output: 1
Constraints:
3 <= arr.length <= 104
0 <= arr[i] <= 106
arr is guaranteed to be a mountain array.

Follow up: Finding the O(n) is straightforward, could you find an O(log(n)) solution?
 */

{
    const peakIndexInMountainArray = function (arr) { //O(n)
        let peak = 0
        let index = 0
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > peak) {
                peak = arr[i]
                index = i
            }
        }
        return index
    };
    // console.log(peakIndexInMountainArray([3,4,5,1]))
}

{
    const peakIndexInMountainArray = function (arr) { //O(n^2)

        let index = 0
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] > arr[j]) {
                    index = i
                }
            }
        }
        return index
    }
    // console.log(peakIndexInMountainArray([3, 4, 5, 6, 7, 4, 2, 1]))

}

{
    const peakIndexInMountainArray = function (arr) { //O(log(n)
        let start = 0;
        let end = arr.length - 1;

        while (start <= end) {
            const mid = Math.floor((start + end) / 2);

            if (arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]) {
                return mid
            }
            if (arr[mid] > arr[mid - 1] && arr[mid] < arr[mid + 1]) {
                start = mid
            } else {
                end = mid
            }

        }
    }
}


{
    const findPeakElement = function (nums) { //O(log(n)
        let start = 0;
        let end = nums.length - 1;

        while (start < end) {
            const mid = Math.floor((start + end) / 2);
            if (nums[mid] < nums[mid + 1]) {
                start = mid + 1
            } else {
                end = mid
            }
        }
        return start
    };
    console.log(findPeakElement([1,2,3,4,5,6,7,8,9,6,4,1]))
}
//--O(o^2)
{
    {
        function findPeakElement(nums) {
          let start = 0
          let next = 1
          while (nums[start] < nums[next]) {
            start++
            next++
          }
          return start
        }
        console.log(findPeakElement([5, 7, 9, 11, 15, 7, 5, 3, 1]))
      }
}
