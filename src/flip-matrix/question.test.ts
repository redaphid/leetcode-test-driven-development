
    import {flipmatrix, flipRandomly, flipColumn, getColumn, flipRow} from './solution'
    describe('flipmatrix', () => {
      test("Example 1", () => {
        expect(true).toBe(true)
      })
      describe('flipRandomly', () => {
        test("Example 1", () => {
          const matrix = [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16]
          ]
          const result = flipRandomly(matrix)
          expect(result).toBeDefined()
        })
      })
      describe("getColumn", () => {
        test("Getting column 0", () => {
          const matrix = [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16]
          ]
          const result = getColumn(matrix, 0)
          expect(result).toEqual([1, 5, 9, 13])
        })
      })
      describe('flipRow', () => {
        test("Flipping a row should reverse it's order", () => {
          const matrix = [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16]
          ]
          flipRow(matrix, 1)
          const row = matrix[1]
          expect(row[0]).toBe(8) 
        })
      })
      describe('flipColumn', () => {
        test("Flipping a column should reverse it's order", () => {
          const matrix = [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16]
          ]
          flipColumn(matrix, 1)
          const row = matrix[0]
          expect(row[1]).toBe(14) 
        })
      })
    })
    
  
