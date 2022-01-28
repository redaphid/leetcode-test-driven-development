
    import {merge} from './solution'
    describe('merge', () => {
      test("Existence", () => {
        expect(merge).toBeDefined()
      })
      test("Example 1", () => {
        const nums1 = [1,2,3,0,0,0]
        const nums2 = [2,5,6]
        const m = 3
        merge(nums1, m, nums2, 3)
        expect(nums1).toEqual([1,2,2,3,5,6])
      })
    })
    
  
