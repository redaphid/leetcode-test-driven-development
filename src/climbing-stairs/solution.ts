
  
  let seenMap = new Map<number, number>();
  function climbStairs(n:number) {
    if (n <= 0) return 0
    if(seenMap.has(n)) return seenMap.get(n);
    switch(n) {
      case 1:
      case 2:        
        seenMap.set(n, n);
        break;
      default:
        const result = climbStairs(n-1) + climbStairs(n-2);
        seenMap.set(n, result);    
    }
    return seenMap.get(n)
  }
  export {climbStairs}

  
