
  function rob(houses:number[]):number { 
    //Its never less than the max we can rob, which is either even or odd
    let evens = 0;
    let odds = 0;
    for(let i = 0; i < houses.length; i++){
      if(i%2){
        evens += houses[i];
        continue
      }
      odds += houses[i];
    }
    return Math.max(evens, odds);
  }
  export {rob}

  
