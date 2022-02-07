import { minBribes } from "./solution";
describe("minBribes", () => {
  test("1 bribe", () => {
    const q = [1,3,2];
    const bribes = minBribes(q);
    expect(bribes).toEqual(1);
  });
  test("too chaotic", () => {
    const q = [4,1,2,3];
    const bribes = minBribes(q);
    expect(bribes).toEqual(-1);
  })
  test("Case 0", () => {
    const q = [2,1,5,3,4];
    const bribes = minBribes(q);
    expect(bribes).toEqual(3);
  })
  
  test("Case 1", () => {
    const q = [5,1,2,3,7,8,6,4,];
    const bribes = minBribes(q);
    expect(bribes).toEqual(-1);
  })

});
