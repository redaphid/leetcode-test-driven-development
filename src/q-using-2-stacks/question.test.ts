
    import {qusing2stacks} from './solution'
    describe('qusing2stacks', () => {
      test("Example 1", () => {
        const input = [
          "10","1 42","2","1 14","3","1 28","3","1 60","1 78","2","2"
        ]
        const expected = [
          "14", "14"
        ]
        expect(qusing2stacks(input)).toEqual(expected)
      })
    })
    
  
