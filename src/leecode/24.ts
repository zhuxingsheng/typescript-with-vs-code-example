import { ListNode } from "./ListNode";
// 24.
swap();


function swap() {
    var node:ListNode =  arrayToListNode();

    var dummyHead:ListNode = new ListNode(-1,node);

    var current:ListNode|null = dummyHead;

    while(current&&current.next&&current.next.next) {

        let firstNode:ListNode = current.next;

        let secondNode:ListNode = current.next.next;

        let thirdNode:ListNode | null = current.next.next.next;
        //1
        //current.next = current.next.next;
        current.next = secondNode;

        //2
        //current.next.next = current.next;
        secondNode.next = firstNode;
        //3
        //current.next.next = current.next?.next?.next;
        firstNode.next = thirdNode

        current = firstNode;
    }

    print(dummyHead.next);

}

function print(node:ListNode|null){
    while(node!=null){
        console.log(node)
        node = node.next
    }

}

function arrayToListNode():ListNode {
    let array:number[] = [1,2,3,4];

    var header:ListNode = new ListNode(array[0]);
    var current:ListNode = header;
    for(let i:number = 1;i< array.length;i++) {
        let next:ListNode = new ListNode(array[i]);
        current.next = next;
        current = current.next;
    }

    return header;

}