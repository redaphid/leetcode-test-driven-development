
    import {superdigit} from './solution'
    describe.only('superdigit', () => {
      test.only("Example 2", () => {       
       const result = superdigit('9875',4 )
       expect(result).toEqual(8)
      })
      test("Example 1", () => {
        const result = superdigit('1', 100)
        expect(result).toEqual(1)
      })
      test("When the number is 9875", () => {
        const result = superdigit('9875', 1)
        expect(result).toEqual(2)
      })
      xtest("When the number is huge", () => {
        const huge = Math.pow(9, 5)
          .toString()
          .repeat(10000)
        const result = superdigit(huge, Math.pow(9, 5))
        expect(result).toEqual(2)
      })
    })
    
  
