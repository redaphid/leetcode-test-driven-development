
    import {isSymmetric} from './solution'
    describe('isSymmetric', () => {
      test("Example 1", () => {
        // [1,2,2,3,4,4,3]
        //  
        const input = {
          val: 1,
          left: { val: 2,  },
          right: { val: 2},
              
        }
        const result = isSymmetric(input)
        expect(result).toBe(true)
      })
      test.only("Example 2", () => {
        //input = [1,2,2,null,3,null,3]
        const input = {
          val: 1,
          left: { val: 2,
                  left: { val: 3, },
          },
          right: { val: 2, left: { val: 3, }},
        }
        const result = isSymmetric(input)
        expect(result).toBe(false)
      })
    })
    
  
