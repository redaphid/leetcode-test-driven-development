
    import {superdigit} from './solution'
    describe('superdigit', () => {
      test("Example 2", () => {       
       const result = superdigit('9875',4 )
       expect(result).toEqual(116)
      })
      test("Example 1", () => {
        const result = superdigit('1', 100)
        expect(result).toEqual(1)
      })
    })
    
  
