

//
{

    var hasCycle = function (head) {
        let slow = head
        let fast = head
        while (fast && fast.next) {
            slow = slow.next
            fast = fast.next.next

            if (slow === fast) return true
        }
        return false

    };
}

//--
{
    var hasCycle = function (head) {
        let set = new Set();   // using hashmap to store head
        while (head != null) {
            if (set.has(head)) {   // check if this node is already traversed i.e. find loop
                return true;  // if node already present i.e traversed => loop found 
            }
            set.add(head);  // if node is not present in hashmap then add it
            head = head.next;  // moves head to next node for iteration
        }
        return false;    // if loop not found then return false
    };
}