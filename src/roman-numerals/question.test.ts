
    import {romanToInt} from './solution'
    describe('romanToInt', () => {
      test("Example 1", () => {
        const input = "III"
        const expected = 3
        const actual = romanToInt(input)
        expect(actual).toBe(expected)
      })
      test("Example 2", () => {
        const input = "IV"
        const expected = 4
        const actual = romanToInt(input)
        expect(actual).toBe(expected)
      })
      test("Example 3", () => {
        const input = "IX"
        const expected = 9
        const actual = romanToInt(input)
        expect(actual).toBe(expected)
      })
      test("Example 4", () => {
        const input = "LVIII"
        const expected = 58
        const actual = romanToInt(input)
        expect(actual).toBe(expected)
      })
    })
    
  
