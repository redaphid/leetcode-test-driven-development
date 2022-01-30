function fizzBuzz(n: number) {
  let thingToAdd = "";
  const result = [];
  for (let i = 1; i < n+1; i++) {
    if (i % 3 == 0) thingToAdd += "Fizz";
    if (i % 5 == 0) thingToAdd += "Buzz";
    if (thingToAdd == "") thingToAdd = i.toString();
    result.push(thingToAdd);
    thingToAdd = "";
  }
  return result;
}
export { fizzBuzz };
