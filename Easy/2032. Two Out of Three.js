/**
 * 
 * 2032. Two Out of Three

Given three integer arrays nums1, nums2, and nums3, return a distinct array containing all the values that are present in at least two out of the three arrays. You may return the values in any order.
 

Example 1:

Input: nums1 = [1,1,3,2], nums2 = [2,3], nums3 = [3]
Output: [3,2]
Explanation: The values that are present in at least two arrays are:
- 3, in all three arrays.
- 2, in nums1 and nums2.
Example 2:

Input: nums1 = [3,1], nums2 = [2,3], nums3 = [1,2]
Output: [2,3,1]
Explanation: The values that are present in at least two arrays are:
- 2, in nums2 and nums3.
- 3, in nums1 and nums2.
- 1, in nums1 and nums3.
Example 3:

Input: nums1 = [1,2,2], nums2 = [4,3,3], nums3 = [5]
Output: []
Explanation: No value is present in at least two arrays.
 

Constraints:

1 <= nums1.length, nums2.length, nums3.length <= 100
1 <= nums1[i], nums2[j], nums3[k] <= 100
 */
//--


{ //DP O(n)
    const twoOutOfThree = function(nums1, nums2, nums3) {
        let res = [];
        let arr1 =  Array(101).fill(0), 
            arr2 =  Array(101).fill(0), 
            arr3 =  Array(101).fill(0)
        
        for (let num of nums1) {
            arr1[num] = 1
            
        }
        
        for (let num of nums2) {
            arr2[num] = 1
        }
        
        for (let num of nums3) {
            arr3[num] = 1
        }
        
        for (let i = 0; i < 101; i++) {
            if (arr1[i] + arr2[i] + arr3[i] >=2) res.push(i)
        }
        return res
    };
    console.log(twoOutOfThree([4, 1, 1, 2], [2, 3, 3], [4]))

}

//--
{ //Not passes all test cases
    const twoOutOfThree = function (nums1, nums2, nums3) {
        let map = {}, res = []
        for (let i = 0; i < nums1.length; i++) {
            map[nums1[i]] = (map[nums1[i]] | 0)
        }

        for (let j = 0; j < nums2.length; j++) {
            if (map.hasOwnProperty(nums2[j])) {
                res.push(nums2[j])
            } else {
                map[nums2[j]] = (map[nums2[j]] | 0)
            }
        }

        for (let k = 0; k < nums3.length; k++) {
            if (map.hasOwnProperty(nums3[k])) {
                res.push(nums3[k])
            } else {
                map[nums3[k]] = (map[nums3[k]] | 0)
            }
        }
        console.log(map)
        return [...new Set(res)]
    };

}