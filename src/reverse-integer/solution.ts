function reverse(n: number) {
  let sign = 1;
  const prettyMuchReversed = n.toString().split("").reverse().join("");

  const lastChar = prettyMuchReversed.slice(-1);

  if (lastChar === "-") {
    sign = -1;
  }

  return parseInt(prettyMuchReversed) * sign;
}

export { reverse };
