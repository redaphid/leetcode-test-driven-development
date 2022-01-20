import {ListNode} from '../util/linked-lists';
function deleteNode(root: ListNode | null): void {  
    if(!root) return;
    if(!root.next) return;
    
    root.val = root.next!.val;
    root.next = root.next!.next;
}

export { deleteNode};
