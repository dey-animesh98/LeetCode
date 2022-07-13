/**
 * Given the head of a singly linked list, return true if it is a palindrome.

 

Example 1:


Input: head = [1,2,2,1]
Output: true
Example 2:


Input: head = [1,2]
Output: false
 

Constraints:

The number of nodes in the list is in the range [1, 105].
0 <= Node.val <= 9
 

Follow up: Could you do it in O(n) time and O(1) space?
 */

//--
{
    var reverse = function (head) {
        let curr = head
        let prev = null
        while (curr) {
            let temp = curr.next
            curr.next = prev
            prev = curr
            curr = temp
        }
        return prev
    }

    var isPalindrome = function (head) {
        let slow = head
        let fast = head
        let startPointer = head
        let len = 0

        while (fast && fast.next) {
            slow = slow.next
            fast = fast.next.next
            len++
        }
        let mid = reverse(slow)

        while (len) {
            len--
            if (mid.val !== startPointer.val) return false

            mid = mid.next
            startPointer = startPointer.next
        }

        return true

    };
}