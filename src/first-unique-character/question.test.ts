
    import {firstUniqChar} from './solution'
    describe('firstuniquecharacter', () => {
      test("Example 1", () => {
        const input = "leetcode"
        const expected = 0
        const actual = firstUniqChar(input)
        expect(actual).toBe(expected)
      })
      test("Example 2", () => {
        const input = "loveleetcode"
        const expected = 2
        const actual = firstUniqChar(input)
        expect(actual).toBe(expected)
      })
      test("Example 3", () => {
        const input = "aabb"
        const expected = -1
        const actual = firstUniqChar(input)
        expect(actual).toBe(expected)
      })
    })

    
  
