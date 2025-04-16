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
