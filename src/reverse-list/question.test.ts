
    import {reverseList} from './solution'
    import {arrayToList} from '../util/linked-lists'
    
    describe('reverseList', () => {
      test("Example 1", () => {
        const input = arrayToList([1,2,3,4,5])
        const output = arrayToList([5,4,3,2,1])
        
        const result = arrayToList(reverseList(input))

        expect(result).toEqual(output)
        expect(true).toBe(false)
      })
    })
    
  
