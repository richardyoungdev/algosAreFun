// linked list warm up

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
};

const a = new Node("A")
const b = new Node("B")
const c = new Node("C")
const d = new Node("D")

a.next = b;
b.next = c;
c.next = d;

// A --> B --> C--> D

// itterative method:
// const printLinkedList = (head) => {
//     let current = head;

//     while (current !== null){
//         console.log("current.value-->", current.val)
//         current = current.next; 
//     }
// };

// recursive method:
// const printLinkedList = (head) => {
//     if(head === null) return ;

//     console.log(head.val);
//     printLinkedList(head.next)
// }
// printLinkedList(a)


// linkedListValues
// Write a function, linkedListValues, that takes in the head of a linked list as an argument. 
// The function should return an array containing all values of the nodes in the linked list.

// const linkedListValues = (head) => {
//     let values = [];

//     let current = head;

//     while(current !== null ){
//         console.log(current.val)
//         values.push(current.val)
//         current = current.next
//     }

//     return values;
// };

// recursive method:
// const linkedListValues = (head) => {
//     let values = []

//     if(head === null){
//         return
//     }

//     fillValues(head, values)

//     return values
// }

// const fillValues = (head, values) => {
//     if (head === null) return;

//     values.push(head.val);
//     fillValues(head.next, values);
// }

// sumList

// traverse in order method
const sumList = (head) => {
    let sum = 0;

    let current = head

    while (current !== null){
        console.log(current.val)
        sum = sum + current.val

        current = current.next
    }

    return sum

};

// recursive method:
const sumList = (head) => {
    let sum = 0

    if (head === null) return 0

    // call your function recursively 
    return head.val + sumList(head.next)    
}

// linked list find
// Write a function, linkedListFind, that takes in the head of a linked list and a target value. 
// The function should return a boolean indicating whether or not the linked list contains the target.

const linkedListFind = (head, target) => {
    let current = head;

    while (current !== null) {

        if (current.val === target) {
            return true;
        }

        current = current.next
    }


    // return false outside of loop
    return false;
}

// recursive method
const linkedListFind = (head, target) => {
    // base case 1
    if (head === null) return false;

    // base case 2
    if (head.val === target) return true;

    // call your function recursively 
    return linkedListFind(head.next, target)
};

// get node value
// Write a function, getNodeValue, that takes in the head of a linked list and an index. 
// The function should return the value of the linked list at the specified index.

// If there is no node at the given index, then return null.

// iterative method:
const getNodeValue = (head, index) => {
    let count = 0;

    let current = head;

    while (current !== null){

        if(count === index) {
            return current.val
        }

        count++
        current = current.next

    }

    return current
  };

  // recursive method:
  const getNodeValue = (head, index) => {
    // base case 1
    if (head === null) return null;

    // base case 2
    if (index === 0) return head.val;

    return getNodeValue(head.next, index - 1);
  };
  
// reverse list
// Write a function, reverseList, that takes in the head of a linked list as an argument. 
// The function should reverse the order of the nodes in the linked list in-place 
// and return the new head of the reversed linked list.

// iterative method
const reverseList = (head) => {
  
    // set up prev, current
    let prev = null;
    let current = head;
    
    // create while loop
    while (current !== null) {
        // setup next
        let next = current.next;
    
        // reverse 
        // have the arrow point to null
        // current.next is now prev
        current.next = prev;
      
        // prev is now current
        prev = current
      
        // current is now next
        current = next
    
    }
    
    // return prev
    return prev
  };

// recursive method:
const reverseList = (head, prev = null) => {
    // base case
    if (head === null) return prev

    const next = head.next;

    head.next = prev;

    // return and call function
    return reverseList(next, head);
};

// zipper lists
// Write a function, zipperLists, that takes in the head of two linked lists as arguments. 
// The function should zipper the two lists together into single linked list by alternating nodes. 
// If one of the linked lists is longer than the other, the resulting list should terminate with the remaining nodes. 
// The function should return the head of the zippered linked list.

// Do this in-place, by mutating the original Nodes.
const zipperLists = (head1, head2) => {
    // setup tail
    let tail = head1;
    
    // setup current1 and current2
    let current1 = head1.next
    let current2 = head2;
    
    // setup count
    let count = 0;
    
    // while loop
    while (current1 !== null && current2 !== null) {
      // if count is even, next node is from current2;
      if (count % 2 === 0) {
        // next node from current2 is attached to tail
        tail.next = current2;
        
        // current2 moves to next node
        current2 = current2.next;
        
      }
      else {
        // if count is odd, next node is from current1
        tail.next = current1;
  
        // current1 moves to next node
        current1 = current1.next;
      }

         // increase count and move tail to the right;
        count++
        tail = tail.next
    }
  

    
    // if no more nodes in head1, remaining head2 is attached to tail.
    if(current1 === null) tail.next = current2
    // if no more nodes in head2, remaining head1 is attached to tail.
    if(current2 === null) tail.next = current1;
    
    // return head1
    return head1;
  };

  // recursive method:
  const zipperList = (head1, head2) => {
    // base case 1
    if(head1 === null && head2 === null) return null;
    
    // base case 2
    if(head1 === null) return head2;

    // base case 3
    if(head2 === null) return head1;

    const next1 = head1.next;
    const next2 = head2.next;

    head1.next = head2;
    head2.next = zipperList(next, next2);

    return head1;
  }


// merge lists
// Write a function, mergeLists, that takes in the head of two sorted linked lists as arguments. 
// The function should merge the two lists together into single sorted linked list. The function should return the head of the merged linked list.

// Do this in-place, by mutating the original Nodes.
const mergeLists = (head1, head2) => {
    const dummyHead = new Node(null);
    let tail = dummyHead;

    let current1 = head1
    let current2 = head2

    // create while loop while current1 and current2 are not null
    while(current1 !== null && current2 !== null) {
        if (current1.val < current2.val){
            // consume a node from current1
            tail.next = current1;
            // progress the current1 pointer
            current1 = current1.next
        } else {
            tail.next = current2;

            current2 = current2.next;
        }

        // make tail = tail.next to add to next iteration 
        tail = tail.next
    }

    if(current1 === null) tail.next = current2
    if(current2 === null) tail.next = current1

    // return dummyHead.next
    return dummyHead.next
};

// is univalue list
// Write a function, isUnivalueList, that takes in the head of a linked list as an argument. 
// The function should return a boolean indicating whether or not the linked list contains exactly one unique value.

// You may assume that the input list is non-empty.

// iterative method:
const univalueList = (head) => {
    let current = head;

    while (current !== null){
        if(head.val !== current.val){
            return false;
        }

        current = current.next
    }

    return true;
};

// longest streak
// Write a function, longestStreak, that takes in the head of a linked list as an argument. 
// The function should return the length of the longest consecutive streak of the same value within the list.

const longestStreak = (head) => {
    // max-streak
    let maxStreak = 0;

    // current-streak
    let currentStreak = 0;

    // prev-value
    let prevValue = null;

    // current 
    let currentNode = head;

    // while loop
    while (currentNode !== null){
        if (currentNode.val === prevValue){
            currentStreak++
        } else {
            currentStreak = 1;
        }

        // if currentSteak > maxStreak, maxStreak is now equal to value of currentStreak
        if(currentStreak > maxStreak){
            maxStreak = currentStreak
        }

        prevValue = currentNode.val

        currentNode = currentNode.next
    }

    // return max-streak
    return maxStreak;
};

// remove node
// Write a function, removeNode, that takes in the head of a linked list and a target value as arguments. 
// The function should delete the node containing the target value from the linked list and return the head of the resulting linked list. 
// If the target appears multiple times in the linked list, only remove the first instance of the target in the list.

// Do this in-place.

// You may assume that the input list is non-empty.

// You may assume that the input list contains the target.

const removeNode = (head, targetVal) => {
    // setup current = head
    let current = head;
    
    // setup prev
    let prev = null;

    // edge case
    // if target value is at head of tail, return head.next
    if(targetVal === head.val) return head.next 
    
    // while loop
    while(head !== null){    
    // if targetVal equals current.val, prev points to current.next
      if(targetVal === current.val) {
        prev.next = current.next;
        // when you delete a node, break out from the while loop
        break;
      }

      prev = current
      current = current.next
      
    } 
    
    // return head
    return head
  };


// insert node
// Write a function, insertNode, that takes in the head of a linked list, a value, and an index. 
// The function should insert a new node with the value into the list at the specified index. Consider the head of the linked list as index 0. 
// The function should return the head of the resulting linked list.

// Do this in-place.

// You may assume that the input list is non-empty and the index is not greater than the length of the input list.

  const insertNode = (head, value, index) => {
  
    let current = head;
      
    let count = 0;
   
    if(index === 0) {
      const newHead = new Node(value)
      newHead.next = head
      return newHead;
    }

    while (current !== null){

      if (count === index - 1){
        let temp = current.next
        current.next = new Node(value);
        current.next.next = temp
      }
      
      count++
      current = current.next
    }

    return head
};

// create linked list
// Write a function, createLinkedList, that takes in an array of values as an argument. 
// The function should create a linked list containing each element of the array as the values of the nodes. 
// The function should return the head of the linked list.
const createLinkedList = (values) => {
    const dummyHead = new Node(null);
    tail = dummyHead;
    
    for (let val of values){
      // tail.next = new Node(1)
      tail.next = new Node(val);
      

      tail = tail.next
    }
    
    
    return dummyHead.next
};


// add lists
// Write a function, addLists, that takes in the head of two linked lists, each representing a number. 
// The nodes of the linked lists contain digits as values. The nodes in the input lists are reversed; 
// this means that the least significant digit of the number is the head. 
// The function should return the head of a new linked listed representing the sum of the input lists. 
// The output list should have its digits reversed as well.
const addLists = (head1, head2) => {
  
    // create dummyHead
    const dummyHead = new Node(null);
  
    // create tail
    let tail = dummyHead;
    
    // create carry 
    let carry = 0;
    
    // create two currents for each head
    let current1 = head1;
    let current2 = head2;
    
    // create while loop
    while (current1 !== null || current2 !== null || carry === 1){
  
      // create val1
      let val1 = current1 === null ? 0 : current1.val;
      // create val2
      let val2 = current2 === null ? 0 : current2.val;
      
      // create sum
      let sum = val1 + val2 + carry
      
      // reassign carry
      carry = sum > 9 ? 1 : 0;
      
      // create digit
      // sum % 10 gives you the remainder
      // ex. 14 % 10 gives you 4
      // ex. 7 % 10 gives you 7
      let digit = sum % 10; 
      
      // if statement for current1. if current1 does not equal to null, current1 points to current1.next
      if(current1 !== null) {
        current1 = current1.next;
      }
  
      // if statement for   current2. if current2 does not equal to null, current2 points to current2.next
      if(current2 !== null) {
        current2 = current2.next;
      }
      
      // // create new node
      // new Node(digit)
      
      // next tail is the new node
      tail.next = new Node(digit)

      // once you create new node, make the tail point to that new node.
      tail = tail.next
    }
  
  
    // return dummyHead.next
    return dummyHead.next;
  };

