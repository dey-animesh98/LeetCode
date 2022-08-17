/**
 * Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

Each number in candidates may only be used once in the combination.

Note: The solution set must not contain duplicate combinations.

 

Example 1:

Input: candidates = [10,1,2,7,6,1,5], target = 8
Output: 
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]
Example 2:

Input: candidates = [2,5,2,1,2], target = 5
Output: 
[
[1,2,2],
[5]
]
 

Constraints:

1 <= candidates.length <= 100
1 <= candidates[i] <= 50
1 <= target <= 30
 */

//-Time Complexity: O(2^N) -- Space Complexity: O(N)

{
    var combinationSum2 = function (candidates, target) {
        let res = []
        //to get unique pairs of sum
        candidates.sort((a, b) => a - b)

        const dfs = (i, candidates, target, temp) => {
            //backtrack
            if (target < 0) return

            //Base case
            if (target === 0) {
                res.push(temp.slice())
                return
            }

            //dfs
            for (let j = i; j < candidates.length; j++) {
                //not use a single component more than once
                if (i !== j && candidates[j] === candidates[j - 1]) continue
                temp.push(candidates[j])
                dfs(j + 1, candidates, target - candidates[j], temp)
                temp.pop()
            }
        }
    }

}