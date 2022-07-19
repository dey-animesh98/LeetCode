/**
 * 
 * Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
Example 1:


Input: head = [1,1,2]
Output: [1,2]
Example 2:


Input: head = [1,1,2,3,3]
Output: [1,2,3]
 

Constraints:

The number of nodes in the list is in the range [0, 300].
-100 <= Node.val <= 100
The list is guaranteed to be sorted in ascending order.
 */

//--
{// T.C -> O(n) ; S.C -> O(1)
    var deleteDuplicates = function (head) {

        let dummy = new ListNode(null, head)
        let prev = dummy
        let curr = head

        while (curr) {
            if (prev.val === curr.val) {
                while (curr && prev.val === curr.val) {
                    curr = curr.next
                }
                prev.next = curr
            } else {
                prev = prev.next
                curr = curr.next
            }
        }
        return head
    };
}

// let f = Math.floor(53/26)
// let s = 53-26*f

// console.log(f+""+s)