export function maxDistToClosest(seats: number[]): number {
  let bestDist = -1;
  let firstOccupiedSeat = -1
  let lastOccupiedSeat = 0
  let currentDist = 0
  
  let bestStartingSeat = -1
  let bestEndingSeat = -1

  seats.forEach((occupied, seat) => {   
    if(!occupied) return currentDist++
    // if we are at a person, reset the current distance. record that
    console.log(`seat ${seat} is occupied`) 
    lastOccupiedSeat = seat
    if(currentDist > bestDist) {
      console.log(`the biggest distance is ${currentDist} between seats ${firstOccupiedSeat} and ${lastOccupiedSeat}`)
      console.log(`${currentDist} seats were empty between ${firstOccupiedSeat} and ${lastOccupiedSeat}`)
      bestStartingSeat = firstOccupiedSeat
      bestEndingSeat = lastOccupiedSeat

      bestDist = currentDist
      firstOccupiedSeat = seat     
    }
    lastOccupiedSeat = seat
    currentDist = 0
  });

  return (bestEndingSeat - bestStartingSeat)/2
}