
    import {mergeTwoLists} from './solution'
    import {ListNode,arrayToList, listToArray} from '../util/linked-lists'
    describe('mergesortedlists', () => {
      test("Example 1", () => {
        const l1 = arrayToList([1,2,4])
        const l2 = arrayToList([1,3,4])
        const result = mergeTwoLists(l1, l2)!
        const resultArray = listToArray(result)
        expect(resultArray).toEqual([1,1,2,3,4,4])
      })
      test("Example 2", () => {
        const l1 = arrayToList([1])
        const l2 = arrayToList([2])
        const result = mergeTwoLists(l1, l2)!
        const resultArray = listToArray(result)
        expect(resultArray).toEqual([1,2])
      })
    })
    
  
