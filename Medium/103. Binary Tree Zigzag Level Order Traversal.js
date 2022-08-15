/**
 * Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: [[3],[20,9],[15,7]]
Example 2:

Input: root = [1]
Output: [[1]]
Example 3:

Input: root = []
Output: []
 

Constraints:

The number of nodes in the tree is in the range [0, 2000].
-100 <= Node.val <= 100
 */

//--My sol

{
    var zigzagLevelOrder = function (root) {

        let results = []

        const bfs = (root, level) => {
            if (!root) return

            results[level] ? results[level].push(root.val) : results[level] = [root.val]

            bfs(root.left, level + 1)
            bfs(root.right, level + 1)
        }

        bfs(root, 0)

        results = results.map((ele, i) => (i % 2 !== 0) ? ele.reverse() : ele)

        return results
    };
}