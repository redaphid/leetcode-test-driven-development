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
  "0": 0,
};
const MAX_SIZE = Math.pow(2, 31) - 1;
function myAtoi(s: string): number {
  let result = 0;
  let exponent = -1
  s = s.trim()
  // const b = s.split('').reverse()
  for (let i = s.length -1; i >= 0; i--) {
    exponent++
    const c = s[i]
    switch (c) {
      case "-":
        if (result > 0) result *= -1;
        continue;
      case "+":
        if (result < 0) result *= -1;
      case "0":
        continue;
      default:
        const n = charToIntMap[c];
        if (n === undefined) {
          if(i === 0) return 0;
          exponent--
          continue
        }
        const thingToAdd = n * Math.pow(10, exponent);
        result += thingToAdd
        continue
    }
  }
  return Math.abs(result) > MAX_SIZE ? MAX_SIZE * Math.sign(result) : result;
}



export { myAtoi };
