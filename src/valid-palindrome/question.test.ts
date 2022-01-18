import { isPalindrome } from "./solution";
describe("isPalindrome", () => {
  test("Example 1", () => {
    const input = "race a car";
    const output = isPalindrome(input);
    expect(output).toBe(false);
  });
  test("Example 2", ()=>{
    const input = "racecar"
    const output = isPalindrome(input)
    expect(output).toBe(true)
  })
});
