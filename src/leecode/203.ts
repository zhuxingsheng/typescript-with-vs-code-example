
import { ListNode } from './ListNode';

//203.移除链表元素

function removeNode(remove:number):void {

    var nodes : ListNode| null = arrayToListNode();

    //虚拟头
    var dummyHead:ListNode | null = new ListNode(-99999,nodes);
   
    let pre = dummyHead;
    
    var current:ListNode|null = pre.next;


    while(current!= null){
       

        if(current.val == remove) {
            pre.next = current.next
        } else {
            pre = current;
        }

        
        current = current.next;
        
    }

    print(dummyHead.next)

}

function print(node:ListNode|null){
    while(node!=null){
        console.log(node)
        node = node.next
    }

}

removeNode(4);

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