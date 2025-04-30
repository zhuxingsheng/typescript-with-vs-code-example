export class ListNode {

    val: number;

    next: ListNode | null;

    constructor(val: number, next: ListNode|null = null) {
        this.val = val;

        this.next = next;
    }
}


export function print(node:ListNode|null){
    while(node!=null){
        console.log(node)
        node = node.next
    }

}