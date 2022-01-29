
    import {maxSubArray} from './solution'
    describe('maxSubArray', () => {
      test("Example 1", () => {
        const nums = [-2,1,-3,4,-1,2,1,-5,4]
        const result = maxSubArray(nums)
        expect(result).toBe(6)
      })
      test("Example 2", () => {
        const nums = [1]
        const result = maxSubArray(nums)
        expect(result).toBe(1)        
      })
      test("Example 3", () => {
        const nums = [5,4, -1, 7, 8]
        const result = maxSubArray(nums)
        expect(result).toBe(23)        
      })
    })
    
  
