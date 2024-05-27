//link https://leetcode.cn/problems/swap-nodes-in-pairs

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    //defined dummy node,because it should control the head by same way
    let dummyNode = new ListNode(0,head);
    //defined the pointer
    let current = dummyNode
    // start at head node,if null,it breaks out of the loop logic
    while(current.next&&current.next.next){
        // store the next first node and next node
        let nextNode = current.next.next
        let prevNode = current.next
        // the first node points to the third one
        prevNode.next = nextNode.next
        // the next node points to first node
        nextNode.next = prevNode

        //the pointer node pointer to next node,now the swap action is done
        current.next = nextNode
        // move pointer to do next loop logic
        current = prevNode
    }

    return dummyNode.next
};

var swapPairsByRecursion = function (head) {
    // defined boundaries
    if (head == null || head.next == null) return head

    let nextNode = head.next
    // the first node ponits to the third node
    head.next = swapPairs(nextNode.next)
    //the next node points to first node
    nextNode.next = head

    // return next node
    return nextNode
}