/**
 * Given the root of a binary tree, return the inorder traversal of its nodes' values.

 

Example 1:


Input: root = [1,null,2,3]
Output: [1,3,2]
Example 2:

Input: root = []
Output: []
Example 3:

Input: root = [1]
Output: [1]
 

Constraints:

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
 

Follow up: Recursive solution is trivial, could you do it iteratively?
 */
//--
{
    var inorderTraversal = function (root) {
        let curr = root, res = []

        const dfs = (node) => {
            if (!root) return res
            if (node.left) dfs(node.left)
            res.push(node.val)
            if (node.right) dfs(node.right)
        }
        dfs(curr)

        return res
    };
}

//
{
    var preorderTraversal = function (root) {
        //iteration:
        //create a stack to store current Node(start with root) & a queue to store visited nodes
        //while the stack is not empty
        //pop the last element in the stack and store it in the queue
        //check if the current node has a right property
        //if so, push the right property to the stack
        //check if the current node has a left property
        //if so, push the left to the stack;  
        //return the queue;
        if (!root) return [];
        let stack = [root], queue = [];
        while (stack.length) {
            let curNode = stack.pop();
            queue.push(curNode.val);
            if (curNode.right) stack.push(curNode.right);
            if (curNode.left) stack.push(curNode.left);
        }
        return queue;
    };
}