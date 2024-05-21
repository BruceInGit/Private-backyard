//Link https://leetcode.cn/problems/remove-linked-list-elements/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    //create a dummy node, because delete a node need to use the prev node.next
    let dummyNode = new ListNode(0, head);
    let pointer = dummyNode
    //begin loop from the head node
    while (pointer.next) {
        if (pointer.next.val === val) {
            //delete the node
            pointer.next = pointer.next.next
        } else {
            // move to next node
            pointer = pointer.next
        }

    }
    //return the head node
    return dummyNode.next
}