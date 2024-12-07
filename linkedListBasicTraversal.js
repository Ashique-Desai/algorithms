class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Creating a simple linked list: 1 -> 2 -> 3 -> null
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);

function traverseLinkedList(head) {
    let currentNode = head;
    while (currentNode !== null) {
        console.log(currentNode.value);
        currentNode = currentNode.next;
    }
}

traverseLinkedList(head);
