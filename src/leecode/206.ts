import { ListNode } from "./ListNode";
// 206.反转链表


reversalLinkedList();


function reversalLinkedList(){
    var node:ListNode = arrayToListNode();
    print(node)
    console.log("=============")

    var pre:ListNode|null = null;

    var current:ListNode|null = node;
    var tmp:ListNode|null = current;
    while (current != null) {
        tmp = current.next;

        current.next = pre;
        pre = current

        current = tmp;

    }
    print(pre)


}
function print(node:ListNode|null){
    while(node!=null){
        console.log(node)
        node = node.next
    }

}

function arrayToListNode():ListNode {
    let array:number[] = [1,2,4,6,3];

    var header:ListNode = new ListNode(array[0]);
    var current:ListNode = header;
    for(let i:number = 1;i< array.length;i++) {
        let next:ListNode = new ListNode(array[i]);
        current.next = next;
        current = current.next;
    }

    return header;

}