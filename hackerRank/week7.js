// reverse linked list

const reverseList = (head) => {
    // create variables for prev and current
    let prev = null;
    let current = head;

    // while loop with stopping condition of current != null
    while (current !== null){
        // create next variable
        let next = current.next;

        // current.next points to prev
        current.next = prev;

        // prev points to current
        prev = current;

        // current points to next
        current = next;

    }

    // return prev
    return prev
};

// PREV --> CURRENT --> CURRENT.NEXT
// 