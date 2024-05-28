//link https://leetcode.cn/problems/intersection-of-two-linked-lists-lcci/description/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
var getLengthOflinkedlist = function (head) {
    let length = 0;
    let current = head
    while (current) {
        length++
        current = current.next
    }
    return length
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    //get length of list
    var lengthA = getLengthOflinkedlist(headA);
    var lengthB = getLengthOflinkedlist(headB);

    var currentA = headA;
    var currentB = headB;
    //if length is small,swap the value to keep the currentA points to the longer list
    if (lengthA < lengthB) {
        [currentA, currentB] = [currentB, currentA];
        [lengthA, lengthB] = [lengthB, lengthA];
    }
    // get the interval of two list
    let interval = lengthA - lengthB
    // because if two list have intersection, it must have same length of intersection,so move the longer one poniter have same length
    while (interval-- > 0) {
        currentA = currentA.next
    }
    // find the intersection
    while (currentA !== currentB && currentA) {
        currentA = currentA.next
        currentB = currentB.next
    }

    return currentA
};