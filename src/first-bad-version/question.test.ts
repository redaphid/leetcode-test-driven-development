import { firstbadversion } from "./solution";
describe.only("firstbadversion", () => {
  test("Example 1", () => {
    const n = 5
    const solution = firstbadversion(jest.fn().mockReturnValue(true));

    expect(solution(n)).toEqual(0);
  });
  test("Example 2", () => {
    const n = 5
    const solution = firstbadversion((version)=>{
      console.log({version});
      return (version > 3)
    });

    expect(solution(n)).toEqual(4);
  });
  test("Example 3", () => {
    const n = 2
    const solution = firstbadversion((version)=>{
      console.log({version});
      return (version > 1)
    })
    expect(solution(n)).toEqual(2);
  })
  test("Example 4", () => {
    const n = 4
    const solution = firstbadversion((version)=>{
      console.log({version});
      return (version >2)
    })
    expect(solution(n)).toEqual(3);
  })
});
