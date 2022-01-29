
    import {climbStairs} from './solution'
    describe('climbStairs', () => {
      test("Example 1", () => {
        const result = climbStairs(2)
        expect(result).toBe(2)
      })
      test("Example 2", () => {
        const result = climbStairs(3)
        expect(result).toBe(3)
      })
      test("Example 3", () => {
        const result = climbStairs(4)
        expect(result).toBe(5)
      })
      test("Figure out what's taking forever", () => {
        const result = climbStairs(99)
        expect(result).toBe(5)
      })
    })
    
  
