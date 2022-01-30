const primeMap = new Map<number, boolean>();
const isPrime = (n: number) => {
  if (n < 2) return false;
  if (n === 2) return true;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      console.log(`${n} is not prime because ${i} is a factor`);
      return false;
    }
  }
  console.log(`${n} is prime`);
  return true;
};
function countPrimes(n: number) {
  let count = 0;
  for (let i = 1; i < n; i++) {
    if (isPrime(i)) count++;
  }
  return count;
}
export { countPrimes };
