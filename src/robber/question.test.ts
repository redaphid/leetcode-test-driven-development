
    import {rob} from './solution'
    describe('rob', () => {
      test("Example 1", () => {
        const houses = [1,2,3,1]
        const max = rob(houses)
        expect(max).toBe(4)
      })
      test("Example 2", () => {
        const houses = [2,7,9,3,1]
        const max = rob(houses)
        expect(max).toBe(12)
      })
      test("Example 3", () => {
        const houses = [2,1,1,2]
        const max = rob(houses)
        expect(max).toBe(4)
      })
    })
    
  
