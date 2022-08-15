/**
 * Given the head of a linked list, remove the nth node from the end of the list and return its head.

 

Example 1:


Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
Example 2:

Input: head = [1], n = 1
Output: []
Example 3:

Input: head = [1,2], n = 1
Output: [1]
 

Constraints:

The number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz
 */

//--MySOL
{
    var removeNthFromEnd = function (head, n) {
        let curr = head, size = 0;
        while (curr) {
            curr = curr.next;
            size++;
        }
        if (size === 1) return (head = null);
        if (size === n) return (head = head.next);

        let count = 0; curr = head;
        
        while (count !== size - n - 1) {
            curr = curr.next;
            count++;
        }
        curr.next = curr.next.next;
        return head;
    };
}
