
    import {deleteNode} from './solution';
    import {makeListFromArray, ListNode} from '../util/linked-lists';
    describe('deleteNode', () => {
      test("Example 1", () => {
        const head = makeListFromArray([4,5,1,9])!
        deleteNode(head.next)
        expect(head.val).toBe(4)
        expect(head.next!.val).toBe(1)
        expect(head.next!.next!.val).toBe(9)
      })
      test("Example 2", () => {
        const head = makeListFromArray([4,5,1,9])!
        const node3 = head.next!.next!
        deleteNode(node3)
        expect(head.val).toBe(4)
        expect(head.next!.val).toBe(5)
        expect(head.next!.next!.val).toBe(9)
      })
      test("Example 3", () => {
        const head = makeListFromArray([2,0,1,3])!        
        deleteNode(head)
        expect(head.val).toBe(0)
        expect(head.next!.val).toBe(1)
        expect(head.next!.next!.val).toBe(3)
      })
      test("Example 4", () => {    
           
        const head = makeListFromArray([4,5,1,9])!
        deleteNode(head.next!)
        expect(head.val).toBe(4)
        expect(head.next!.val).toBe(1)
        expect(head.next!.next!.val).toBe(9)
        expect(head.next!.next!.next).toBe(null)
      })
    })
    
  
