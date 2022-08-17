/**
 * Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

 

Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
Example 2:

Input: nums = [0,1]
Output: [[0,1],[1,0]]
Example 3:

Input: nums = [1]
Output: [[1]]
 

Constraints:

1 <= nums.length <= 6
-10 <= nums[i] <= 10
All the integers of nums are unique.
 */

//--
{
    function helper(p, up, res) {
        if (!up.length) return res.push(p)
        let num = up[0]
        for (let i = 0; i <= p.length; i++) {
            let f = p.slice(0, i)
            let s = p.slice(i, p.length)
            helper(f.concat(num, s), up.slice(1), res)
        }
        return res
    }
    let permute = function (nums) {
        let res = []
        let per = helper([], nums, res)
        return per
    };

    // console.log(permute([1, 2, 3]))
}


function swap(nums, j, i) {
    return [nums[j], nums[i]] = [nums[i], nums[j]]
}

function permute2(index, nums, ans) {
    if (index === nums.length) {
        let temp = []
        for (let i = 0; i < nums.length; i++) {
            temp.push(nums[i])
        }
        return ans.push(temp)

    }

    for (let j = index; j < nums.length; j++) {
        swap(nums, j, index)
        permute2(index + 1, nums, ans)
        swap(nums, j, index)
    }
    return ans
}
let ans = []
console.log(permute2(0, [1, 2, 3], ans))


{
    var permute = function (nums) {
        let res = []
        const dfs = (i, nums) => {
            //base case 
            if (i === nums.length) {
                res.push(nums.slice())
                return
            }

            //recu
            for (let j = i; j < nums.length; j++) {
                [nums[i], nums[j]] = [nums[j], nums[i]]
                dfs(i + 1, nums);
                [nums[i], nums[j]] = [nums[j], nums[i]]
            }
        }

        dfs(0, nums)
        return res
    }
}