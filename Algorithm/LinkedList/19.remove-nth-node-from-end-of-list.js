//Link https://leetcode.cn/problems/remove-nth-node-from-end-of-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let dummyNode = new ListNode(0, head)
    let fastPointer = dummyNode
    let slowPonter = dummyNode
    
    // faster pointer go n times first
    while (n--) {
        fastPointer = fastPointer.next
    }
   
    // then slow ponter go,Determine whether the fast pointer‘s next pointer is empty，
    // then the slow pointer' next pointer is to be deleted node 
    while (fastPointer.next) {
        slowPonter = slowPonter.next
        fastPointer = fastPointer.next
    }

    slowPonter.next = slowPonter.next.next

    return dummyNode.next
};