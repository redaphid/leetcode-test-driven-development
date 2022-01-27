
    import {sortedArrayToBST} from './solution'
    describe('sortedArrayToBST', () => {
      test("Example 1", () => {
        const input = [-10, -3, 0,5,9]
        const output = sortedArrayToBST(input)
        expect(output).toBeDefined()
      })
    })
    
  
