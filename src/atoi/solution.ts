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
  let exponent = -1;
  let seenTheSign = false;

  s = s.trim();
  for (let i = s.length - 1; i >= 0; i--) {
    exponent++;
    const c = s[i];
    switch (c) {
      case "-":
        if(seenTheSign) return 0
        if (result > 0) result *= -1;
        seenTheSign = true;
        continue;
      case "+":
        if(seenTheSign) return 0
        if (result < 0) result *= -1;
        seenTheSign = true;
      case "0":
        continue;
      default:
        const n = charToIntMap[c];
        if (n === undefined) {
          if (c === ".") {
            result = 0;
            exponent = -1;
            continue;
          }
          if (i === 0) return 0;
          exponent--;
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
