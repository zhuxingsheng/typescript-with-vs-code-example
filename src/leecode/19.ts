import { ListNode, print } from "./ListNode";

/**
 * 19.删除链表的倒数第N个节点
 * 
 * 使用快慢双指针
 */

removeNthFromEnd(2)

function removeNthFromEnd(n:number) :void {

    var node:ListNode =  arrayToListNode();
    
        var dummyHead:ListNode = new ListNode(-1,node);

        var fast:ListNode|null|undefined = dummyHead;
        var slow:ListNode|null|undefined = dummyHead;


        for (let i = 0;i<n;i++) {

            fast = fast.next!;
            
        }

        while(fast?.next) {
            slow = slow?.next;
            fast = fast?.next;
        }

        if(slow?.next?.next) {
            slow.next = slow?.next?.next;
        }

        print(dummyHead.next)

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