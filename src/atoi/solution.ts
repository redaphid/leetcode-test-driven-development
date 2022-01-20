const charToIntMap = {
  "1": 1,
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 6,
  "7": 7,
  "8": 8,
  "9": 9,
};
const MAX_SIZE = Math.pow(2, 31) - 1;
function myAtoi(s: string): number {
  s = s.trim();

  let result;
  let exponent;

  const reset = () => {
    result = 0;
    exponent = -1;
  };
  reset();
  for (let i = s.length - 1; i >= 0; i--) {
    exponent++;
    const c = s[i];
    switch (c) {
      //Weird cases handled by switch
      case "0":  
        continue;

      case "-":
        if (i !== 0) reset();
        if (result > 0) result *= -1;
        continue;

      case "+":
        if (i !== 0) reset();
        if (result < 0) result *= -1;
        continue;

      //Normal cases handled by map
      default:
        const n = charToIntMap[c];
        if (n === undefined) {
          reset();
          continue;
        }
        const thingToAdd = n * Math.pow(10, exponent);
        result += thingToAdd;
        continue;
    }
  }
  if (result > MAX_SIZE) return MAX_SIZE;
  if (result < -MAX_SIZE - 1) return -MAX_SIZE - 1;
  return result;
}

export { myAtoi };
