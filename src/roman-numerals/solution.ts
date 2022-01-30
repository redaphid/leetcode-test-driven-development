const romanToIntMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInt(s: string): number {
  let results = [];
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    const decimal = romanToIntMap[c];
    if (!decimal) throw new Error(`Unknown roman numeral: ${c}`);
    const last = results[results.length - 1];
    if (decimal > last) {
      results[results.length - 1] = decimal - last;
    } else {
      results.push(decimal);
    }
  }
  return results.reduce((acc, c) => (acc += c), 0);
}
export { romanToInt };
