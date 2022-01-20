
    import {isValidBST} from './solution'
    describe('isValidBST', () => {
      test("Example 1", () => {
        const input = {
          val: 2,
          left: {val: 1},
          right: {val: 3},
        }
        const result = isValidBST(input)
        expect(result).toBe(true)
      })
    })
    
  
