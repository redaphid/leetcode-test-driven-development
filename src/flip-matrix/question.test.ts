import {
  flipmatrix,
  flipRandomly,
  flipColumn,
  getColumn,
  getAllowedCells,
  flipRow,
} from "./solution";
describe("flipmatrix", () => {
  test("Example 1", () => {
    expect(true).toBe(true);
  });
  describe("flipRandomly", () => {
    let matrix;
    let numberMap;
    describe("When flipping  4x4 matrix", () => {
      beforeEach(() => {
        matrix = matrix = [
          [1, 2, 3, 4],
          [5, 6, 7, 8],
          [9, 10, 11, 12],
          [13, 14, 15, 16],
        ];
        numberMap = flipRandomly(matrix, 10000);
      });
      test("should return a numberMap", () => {
        expect(numberMap).toBeDefined();
      });
      describe("when asking for allowed cells", () => {
        test("should return the correct cells", () => {
          const allowedCells = getAllowedCells(numberMap, 2);
          expect(allowedCells).toBeDefined();
          console.table(allowedCells);
        });
      });
    });
    describe("when flipping a 6x6 matrix", () => {
      beforeEach(() => {
        matrix = [
          [81, 82, 83, 84, 85, 86],
          [77, 78, 79, 10, 11, 12],
          [13, 14, 15, 16, 17, 18],
          [19, 20, 21, 22, 23, 24],
          [25, 26, 27, 28, 29, 30],
          [32, 33, 34, 35, 36, 37],
        ];
        numberMap = flipRandomly(matrix, 1000);
      });
      test("should return a numberMap", () => {
        expect(numberMap).toBeDefined();
      });
      describe("when asking for allowed cells", () => {
        test("should return the correct cells", () => {
          const allowedCells = getAllowedCells(numberMap, 37);
          expect(allowedCells).toBeDefined();
          console.table(allowedCells);
        });
      });
    });
    test("Example 1", () => {
      const matrix = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16],
      ];
      const result = flipRandomly(matrix);
      expect(result).toBeDefined();
    });
  });
  describe("getColumn", () => {
    test("Getting column 0", () => {
      const matrix = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16],
      ];
      const result = getColumn(matrix, 0);
      expect(result).toEqual([1, 5, 9, 13]);
    });
    describe("flipRow", () => {
      test("Flipping a row should reverse it's order", () => {
        const matrix = [
          [1, 2, 3, 4],
          [5, 6, 7, 8],
          [9, 10, 11, 12],
          [13, 14, 15, 16],
        ];
        flipRow(matrix, 1);
        const row = matrix[1];
        expect(row[0]).toBe(8);
      });
    });
    describe("flipColumn", () => {
      test("Flipping a column should reverse it's order", () => {
        const matrix = [
          [1, 2, 3, 4],
          [5, 6, 7, 8],
          [9, 10, 11, 12],
          [13, 14, 15, 16],
        ];
        flipColumn(matrix, 1);
        const row = matrix[0];
        expect(row[1]).toBe(14);
      });
    });
  });
});
