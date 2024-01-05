// Abstract data type of linked list
// Note : head,tail,length
// => head : {value:string | number,next:Object | null}
// tail: {value:string | number,next:Object | null}, length : number

class LinkedList {
  constructor(value) {
    this.head = { value, next: null };
    this.tail = this.head; // -> When a single prop inside this.tail is changed, this.head prop gets updated too
    this.length = 1;
  }
  append(value) {
    // Increment tail prop and update head.next
    const newNode = { value, next: null };
    // this.head.next = newNode; -> Wrong
    // this.tail = newNode; -> Wrong
    this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1;
  }
  printLL() {
    if (this.length === 0) return;
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
  prepend(value) {
    const newNode = { value, next: this.head };
    this.head = newNode;
    this.length += 1;
  }
  _traverseLL(ind) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== ind) {
      currentNode = currentNode.next;
      counter += 1;
    }
    return currentNode;
  }
  insert(index, value) {
    if (index === 0) {
      const newNode = { value, next: this.head };
      this.head = newNode;
      this.length += 1;
      return;
    }
    const leader = this._traverseLL(index - 1);
    const newNode = { value, next: leader.next };
    leader.next = newNode;
    this.length += 1;
  }
  remove(val) {
    let prevNode = null;
    let currentNode = this.head;
    if (currentNode.value === val) {
      this.head = currentNode.next;
      this.length -= 1;
      return;
    } else {
      while (currentNode.value !== val) {
        prevNode = currentNode;
        currentNode = currentNode.next;
      }
      prevNode.next = currentNode.next;
      currentNode.next = null;
      this.length -= 1;
    }
  }
  reverse() {
    pass;
  }
}

const firstLL = new LinkedList(3);
console.log(">>>");
firstLL.remove(3);
firstLL.printLL();
firstLL.append(5);
firstLL.prepend(7);
firstLL.remove(5);
firstLL.printLL();
firstLL.remove(3);
console.log(">>>");
firstLL.printLL();
console.log(">>>");
firstLL.remove(7);
firstLL.printLL();
// firstLL.append(10);
// firstLL.insert(2, 55);
// firstLL.printLL();
// console.log(firstLL);
