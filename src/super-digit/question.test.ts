
    import {superdigit, newSuperDigit} from './solution'
    describe.only('superdigit', () => {
      test("Example 2", () => {       
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
        const rs = result + ''
        expect(rs.length).toEqual(1)
        // expect(result).toEqual(2)
      })
      test("When the number is n=123 and k=3", () => {
        const result = superdigit('123', 3)
        expect(result).toEqual(9)
      })
      test("newSuperDigit should return the same result as superdigit", () => {
        const oldResult = superdigit('123', 3)
        const newResult = newSuperDigit('123', 3)
        expect(newResult).toEqual(oldResult)
      })
    })
    
  
