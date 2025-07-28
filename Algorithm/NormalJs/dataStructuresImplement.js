class Stack {
   constructor() {
      this.items = []
   }

   isEmpty() {
      return this.items.length === 0
   }

   push(item) {
      this.items.push(item)
   }

   pop() {
      return this.items.pop()
   }

   size() {
      return this.items.length
   }

   peek() {
      return this.items[this.items.length - 1]
   }

   print() {
      console.log(this.items.toString())
   }
}

class Queue {
   constructor() {
      this.items = []
   }

   isEmpty() {
      return this.items.length === 0
   }

   enqueue(item) {
      this.items.push(item)
   }

   dequeue() {
      return this.items.shift()
   }

   size() {
      return this.items.length
   }

   peek() {
      return this.items[0]
   }

   print() {
      console.log(this.items.toString())
   }
}

class CircularQueue {
   constructor(capacity) {
      this.capacity = capacity
      this.items = new Array(capacity)
      this.size = 0
      this.head = 0
      this.tail = 0
   }

   isEmpty() {
      return this.size === 0
   }

   isFull() {
      return this.size === this.capacity
   }

   enqueue(item) {
      if (this.isFull()) {
         throw new Error("queue is full");
      }
      this.items[this.tail] = item
      this.size++
      this.tail = (this.tail + 1) % this.capacity
   }

   dequeue() {
      if (this.isEmpty()) {
         throw new Error("queue is empty");
      }

      const item = this.items[this.head]
      this.items[this.head] = undefined
      this.head = (this.head + 1) % this.capacity
      this.size--

      return item
   }

   getSize() {
      return this.size
   }

   peek() {
      return this.items[this.head]
   }

   print() {
      if (this.isEmpty()) {
         throw new Error("queue is empty");
      }
      const result = []

      for (let index = 0; index < this.size; index++) {
         result.push(this.items[(this.head + index) % this.capacity])
      }
      console.log(result.toString());
   }
}

class Node {
   constructor(value) {
      this.value = value
      this.next = null
   }
}

class LinkedList {
   constructor() {
      this.head = null
      this.size = 0
   }

   isEmpty() {
      return this.size === 0
   }

   getSize() {
      return this.size
   }

   print() {
      if (this.isEmpty()) {
         console.log("LinkedList is empty");
         return 
      }
      let current = this.head
      let linkedlistString = ""
      while (current) {
         if (current.next) {
            linkedlistString += `${current.value} ->`
         } else {
            linkedlistString += `${current.value}`
         }
         current = current.next
      }

      console.log(linkedlistString)
   }

   append(value) {
      const node = new Node(value)
      if (this.isEmpty()) {
         this.head = node
      } else {
         let prev = this.head
         while (prev.next) {
            prev = prev.next
         }
         prev.next = node
      }
      this.size++
   }

   removeAt(index){
      if (index >= this.size || index < 0) {
         console.log("Invalid index");
         return null
      }
   
      let removedNode;
      if (index === 0) {
        removedNode = this.head;
        this.head = this.head.next;
      } else {
        let prev = this.head;
        for (let i = 0; i < index - 1; i++) {
          prev = prev.next;
        }
        removedNode = prev.next;
        prev.next = removedNode.next;
      }
       this.size--
      return removedNode
   }

   getAt(index){
      if (index<0|| index >= this.size) {
         return null
      }
      let current = this.head
      for (let j = 0; j < index; j++) {
       current = current.next
      }
    
      return current.value
   }

   reverse(){
      if (this.isEmpty() || !this.head.next) {
         return;
       }
      let current = this.head
      let prev = null
      while (current) {
         let next = current.next
         current.next = prev
         prev = current
         current = next
      }

      this.head = prev
   }
}