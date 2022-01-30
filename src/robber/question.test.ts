
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
      test("[0]", () => {
        const houses = [0]
        const max = rob(houses)
        expect(max).toBe(0)
      })

      xtest("Very large input", () => {
        const houses = [183,219,57,193,94,233,202,154,65,240,97,234,100,249,186,66,90,238,168,128,177,235,50,81,185,165,217,207,88,80,112,78,135,62,228,247,211]
        const max = rob(houses)
        expect(max).toBe(2680)
      })
    })
    
  
