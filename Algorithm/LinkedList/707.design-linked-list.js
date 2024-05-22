//LINK https://leetcode.cn/problems/design-linked-list/

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var MyLinkedList = function () {
    this._size = 0;
    this._tail = null;
    this._head = null;
};

MyLinkedList.prototype.getNode = function (index) {
    if (index < 0 || index >= this._size) return null;
    let cur = new ListNode(0, this._head);

    while (index-- >= 0) {
        cur = cur.next;
    }

    return cur;
};


/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    if (index < 0 || index >= this._size) return -1

    return this.getNode(index).val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    let node = new ListNode(val, this._head)

    this._head = node
    this._size++
    if (!this._tail) {
        this._tail = node;
    }
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    let node = new ListNode(val, null)
    this._size++
    if (this._tail) {
        this._tail.next = node
        this._tail = node
        return
    }

    this._head = node;
    this._tail = node

};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index > this._size) return
    if (index <= 0) {
        this.addAtHead(val)
        return
    }

    if (index === this._size) {
        this.addAtTail(val)
        return
    }

    let node = this.getNode(index - 1)
    node.next = new ListNode(val, node.next)
    this._size++
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0 || index >= this._size) return;
    if (index === 0) {
        this._head = this._head.next;
        if (index === this._size - 1) {
            this._tail = this._head
        }
        this._size--;
        return;
    }

    const node = this.getNode(index - 1);
    node.next = node.next.next;

    if (index === this._size - 1) {
        this._tail = node;
    }
    this._size--;

};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */