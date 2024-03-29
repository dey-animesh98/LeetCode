/**
 * Given the head of a singly linked list, reverse the list, and return the reversed list.

 

Example 1:


Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
Example 2:


Input: head = [1,2]
Output: [2,1]
Example 3:

Input: head = []
Output: []
 

Constraints:

The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000
 

Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?
 */

//--
{
    var reverseList = function (head) {
        let curr = head
        let prev = null


        while (curr != null) {
            let temp = curr.next
            curr.next = prev
            prev = curr
            curr = temp
        }
        return prev

    };
}

{
    var reverseList = function (head) {
        if (!head?.next) return head;

        const node = reverseList(head.next);
        head.next.next = head;
        head.next = null;

        return node;
    };
}