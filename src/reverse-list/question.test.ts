
    import {reverseList} from './solution'
    import {arrayToList, listToArray} from '../util/linked-lists'
    
    describe('reverseList', () => {
      test("Example 1", () => {
        const input = arrayToList([1,2,3,4,5])
        const expected = [5,4,3,2,1]
        
        const result = listToArray(reverseList(input))

        expect(result).toEqual(expected)     
      })
    })
    
  
