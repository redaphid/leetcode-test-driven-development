function maxDistToClosest(seats: number[]): number {
  let bestDist = -1;
  let firstOccupiedSeat = -1
  let lastOccupiedSeat = 0
  let currentDist = 0
  
  let bestStartingSeat = -1
  let bestEndingSeat = -1
  seats.forEach((occupied, seat) => {   
    if(!occupied) return currentDist++   
    lastOccupiedSeat = seat
    if(currentDist > bestDist) {      
      bestStartingSeat = firstOccupiedSeat
      bestEndingSeat = lastOccupiedSeat

      bestDist = currentDist
      firstOccupiedSeat = seat     
    }
    lastOccupiedSeat = seat
    currentDist = 0
  });
  currentDist = seats.length - lastOccupiedSeat
  if (currentDist > bestDist) {
   return seats.length - 1
  }
  return Math.round((bestEndingSeat - bestStartingSeat)/2)
}

export {maxDistToClosest}