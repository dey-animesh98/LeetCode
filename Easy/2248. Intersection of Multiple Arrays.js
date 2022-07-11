/**
 * Given a 2D integer array nums where nums[i] is a non-empty array of distinct positive integers, return the list of integers that are present in each array of nums sorted in ascending order.
 

Example 1:

Input: nums = [[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]
Output: [3,4]
Explanation: 
The only integers present in each of nums[0] = [3,1,2,4,5], nums[1] = [1,2,3,4], and nums[2] = [3,4,5,6] are 3 and 4, so we return [3,4].
Example 2:

Input: nums = [[1,2,3],[4,5,6]]
Output: []
Explanation: 
There does not exist any integer present both in nums[0] and nums[1], so we return an empty list [].
 

Constraints:

1 <= nums.length <= 1000
1 <= sum(nums[i].length) <= 1000
1 <= nums[i][j] <= 1000
All the values of nums[i] are unique.
 */
//--
{
    var intersection = function (nums) {
        let n = nums.length
        let flatArr = nums.flat()
        let map = new Map()

        for (let ele of flatArr) {
            map.set(ele, map.get(ele) + 1 || 1)
        }

        let res = []
        for (let pairs of map) {
            if (pairs[1] === n) {
                res.push(pairs[0])
            }
        }
        return res
    };
    // console.log(intersection([[7, 34, 45, 10, 12, 27, 13], [27, 21, 45, 10, 12, 13]]))
}
//[[7,34,45,10,12,27,13],[27,21,45,10,12,13]]
//E-[10,12,13,27,45]
//-O[45,10,12,27,13]
/**
 * Map(8) {
  7 => 1,
  34 => 1,
  45 => 2,
  10 => 2,
  12 => 2,
  27 => 2,
  13 => 2,
  21 => 1
}
 */

//-
{
    const intersection1 = function (nums) {
        let n = nums.length
        let flatArr = nums.flat()
        let obj = {}
        for (let ele of flatArr) {
            obj[ele] = obj[ele] + 1 || 1
        }
        let res = []
        for(let key in obj){
            if (obj[key] == n) {
                res.push(key)
            }
        }
        return res
    };
    console.log(intersection1([[7,34,45,10,12,27,13],[27,21,45,10,12,13]]))
}