/**
 * Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.

 

Example 1:


Input: root = [4,2,6,1,3]
Output: 1
Example 2:


Input: root = [1,0,48,null,null,12,49]
Output: 1
 

Constraints:

The number of nodes in the tree is in the range [2, 104].
0 <= Node.val <= 105
 

Note: This question is the same as 783: https://leetcode.com/problems/minimum-distance-between-bst-nodes
 */

//--Mysol
{
    var getMinimumDifference = function (root) {
        let curr = root, res = []

        //Geting sorted array from inorder traverse
        const dfs = (node) => {
            if (!root) return

            if (node.left) dfs(node.left)
            res.push(node.val)
            if (node.right) dfs(node.right)
        }
        dfs(curr)

        //getting min diff from sorted array
        let minDiff = Infinity
        for (let i = 1; i < res.length; i++) {
            let currDif = res[i] - res[i - 1]
            minDiff = Math.min(currDif, minDiff)
        }
        return minDiff
    }
}