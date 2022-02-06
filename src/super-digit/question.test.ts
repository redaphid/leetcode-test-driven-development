import { oldSuperDigit, newSuperDigit } from "./solution";
describe("superDigit", () => {
  test("Example 2", () => {
    const result = oldSuperDigit("9875", 4);
    expect(result).toEqual(8);
  });

  test("Example 1", () => {
    const result = oldSuperDigit("1", 100);
    expect(result).toEqual(1);
  });

  test("When the number is 9875", () => {
    const result = oldSuperDigit("9875", 1);
    expect(result).toEqual(2);
  });

  xtest("When the number is huge", () => {
    const huge = Math.pow(9, 5).toString().repeat(10000);
    const result = oldSuperDigit(huge, Math.pow(9, 5));
    const rs = result + "";
    expect(rs.length).toEqual(1);
    // expect(result).toEqual(2)
  });

  test("When the number is n=123 and k=3", () => {
    const result = oldSuperDigit("123", 3);
    expect(result).toEqual(9);
  });

  describe("newSuperDigit", () => {
    describe("when s is 123", () => {
      test("when k is 1", () => {
        const result = oldSuperDigit("123", 1);
        expect(result).toEqual(6);
      });

      test("when k is 2", () => {
        const result = oldSuperDigit("123", 2);
        expect(result).toEqual(3);
      });

      test("when k is 3", () => {
        const result = oldSuperDigit("123", 3);
        expect(result).toEqual(9);
      });

      test("when k is 4", () => {
        const result = oldSuperDigit("123", 4);
        expect(result).toEqual(6);
      });

      test("when k is 5", () => {
        const result = oldSuperDigit("123", 5);
        expect(result).toEqual(3);
      });

      test("when k is 6", () => {
        const result = oldSuperDigit("123", 6);
        expect(result).toEqual(9);
      });
    });
    describe("When comparing old and new super digit", () => {
      test("when the number is 123 and k=1", () => {
        const oldResult = oldSuperDigit("123", 1);
        const newResult = newSuperDigit("123", 1);
        expect(newResult).toEqual(oldResult);
      });

      test("when the number is 123 and k=2", () => {
        const oldResult = oldSuperDigit("123", 2);
        const newResult = newSuperDigit("123", 2);
        expect(newResult).toEqual(oldResult);
      });

      test("when the number is 123 and k=3", () => {
        const oldResult = oldSuperDigit("123", 3);
        const newResult = newSuperDigit("123", 3);
        expect(newResult).toEqual(oldResult);
      });

      test("when the number is 123 and k=4", () => {
        const oldResult = oldSuperDigit("123", 4);
        const newResult = newSuperDigit("123", 4);
        expect(newResult).toEqual(oldResult);
      });
    });
  });
});
