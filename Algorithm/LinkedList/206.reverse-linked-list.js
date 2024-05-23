//LINK https://leetcode.cn/problems/reverse-linked-list/

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
var reverseList = function (head) {
    if (!head||!head.next) return head
    //definde double pointer and temp
    let temp = null
    let current = head
    let pre = null

    while (current) {
        //store next node
        temp = current.next
        //link current node to previous node
        current.next = pre
        //move the previous pointer to current node
        pre = current
        //move the current pointer to next node
        current = temp
    }

    return pre
};



// Recursion way is based on the double pointer way
var reverseRecursion(current,prev){
    if(!prev) return current
    let temp
    temp = current.next
    current.next=prev

    return reverseRecursion(temp,current)
}

var reverseList2=function(head){
    return reverseRecursion(head,null)
}