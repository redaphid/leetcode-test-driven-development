function reverse(n: number) {
  let sign = 1;
  const prettyMuchReversed = n.toString().split("").reverse().join("");

  const lastChar = prettyMuchReversed.slice(-1);

  if (lastChar === "-") {
    sign = -1;
  }
  const reversed = parseInt(prettyMuchReversed) * sign;
  if(Math.abs(reversed) > Math.pow(2, 31)-1) return 0
  return reversed;
}

export { reverse };
