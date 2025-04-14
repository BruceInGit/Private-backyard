class Queue {
   constructor(){
    this.items = []
   }

   isEmpty(){
    return this.items.length === 0
   }

   enqueue(item){
    this.items.push(item)
   }

   dequeue(){
    return this.items.shift()
   }

   size(){
    return this.items.length
   }

   peek(){
    return this.items[0]
   }

   print(){
    console.log(this.items.toString())
   }
}