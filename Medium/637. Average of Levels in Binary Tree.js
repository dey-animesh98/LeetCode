/**
 * Easy

3246

251

Add to List

Share
Given the root of a binary tree, return the average value of the nodes on each level in the form of an array. Answers within 10-5 of the actual answer will be accepted.
 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: [3.00000,14.50000,11.00000]
Explanation: The average value of nodes on level 0 is 3, on level 1 is 14.5, and on level 2 is 11.
Hence return [3, 14.5, 11].
Example 2:


Input: root = [3,9,20,15,7]
Output: [3.00000,14.50000,11.00000]
 

Constraints:

The number of nodes in the tree is in the range [1, 104].
-231 <= Node.val <= 231 - 1
 */

//--MySol
{
    var averageOfLevels = function (root) {
        let res = [], avg = []

        const bfs = (root, level) => {
            if (!root) return

            if (!res[level]) res[level] = 0;
            if (!avg[level]) avg[level] = 0;

            res[level] += root.val;
            avg[level] += 1;

            bfs(root.left, level + 1)
            bfs(root.right, level + 1)
        }

        bfs(root, 0)

        for (let i = 0; i < res.length; i++) {
            res[i] = res[i] / avg[i]
        }

        return res
    };
}