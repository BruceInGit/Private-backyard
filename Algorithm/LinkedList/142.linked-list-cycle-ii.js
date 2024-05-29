//Link https://leetcode.cn/problems/linked-list-cycle-ii/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let slowPointer = head
    let fastPointer = head

    while(fastPointer&&fastPointer.next){
        // every loop,the slow pointer add one step, the fast pointer add two step, if they are same, this list have cycle
        slowPointer = slowPointer.next
        fastPointer = fastPointer.next.next
        if(slowPointer === fastPointer){
        //defind a new pointer, If the two pointers are equal,now it's the entry of cycle
            let pointer = head
            while(slowPointer!==pointer){
                slowPointer = slowPointer.next
                pointer = pointer.next
            }
            return pointer
        }
    }

    return null
};