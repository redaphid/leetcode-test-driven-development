const primes = new Set<number>();
const isPrime = (n: number) => {
  if(primes.has(n)) return true; 
  const prime =  _isPrime(n);
  if(prime) primes.add(n);
  return prime;
};

const _isPrime = (n: number) => {
  if (n < 2) return false;
  if (n === 2) return true;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
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
