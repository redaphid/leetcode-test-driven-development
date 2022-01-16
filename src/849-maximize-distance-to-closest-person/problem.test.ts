import { maxDistToClosest } from "./problem";
test("Example 1", () => {
  const seats = [1, 0, 0, 0, 1, 0, 1];
  const result = maxDistToClosest(seats);
  expect(result).toBe(2);
});

test("Example 2", () => {
  const seats = [1, 0, 0, 0];
  const result = maxDistToClosest(seats);
  expect(result).toBe(3);
})

test("Example 3", () => {
  const seats = [0, 1];
  const result = maxDistToClosest(seats);
  expect(result).toBe(1);
})

test("Example 4", () => {
 const seats = [0,0,1]
  const result = maxDistToClosest(seats)
  expect(result).toBe(2)
})

test ("Example 5", () => {
 const seats =  [1,0,0,1]
 const result = maxDistToClosest(seats)
 expect(result).toBe(1)
})