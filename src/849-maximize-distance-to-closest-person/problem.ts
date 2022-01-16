function maxDistToClosest(seats: number[]): number {
  console.log("these are the seats we'll be dealing with today")
  console.table({seats})
  let lastOccupiedSeat = 0
  let lastBestOccupiedSeat = 0
  let bestDist = 0
  seats = [0, ...seats] // a ghost is sitting in Ghost Chair 0
  seats.forEach((occupied, currentSeat) => {
    if (!occupied) return;
    const seatUI = [...new Array(seats.length).fill(' ')]
    seatUI[currentSeat] = '^'

    //Ok, let's think about the people brackets now.
    console.log(`${currentSeat} is occupied. the last occupied seat was ${lastOccupiedSeat}`)
    seatUI[currentSeat] = '^'
    seatUI[lastOccupiedSeat] = '^'
    console.table({seats, seatUI})

    let distance = (currentSeat - lastOccupiedSeat) -1;
    
    console.log(`the distance between the last occupied seat (${lastOccupiedSeat}) and ${currentSeat} is ${distance}`)
    lastOccupiedSeat = currentSeat
    if (distance > bestDist) {
      console.log(`this is the best distance so far. last best distance was ${bestDist}`)
      bestDist = distance;
      lastBestOccupiedSeat = currentSeat
    }
  })
  bestDist = Math.max(bestDist, seats.length - lastBestOccupiedSeat)
  const begginingSeat = lastBestOccupiedSeat - bestDist
  console.log(`I've decided that the best distance is ${bestDist}, between seats ${begginingSeat} and ${lastBestOccupiedSeat}`)
  
  const seatMap = [...new Array(seats.length).fill(' ')]
  seatMap[begginingSeat] = '^'  
  seatMap[lastBestOccupiedSeat] = '^'

  const alexPosition = Math.round((lastBestOccupiedSeat - begginingSeat)/2)
  console.log(`alex is going to sit in seat ${alexPosition}`)
  seatMap[alexPosition+1] = 'A'
  console.table({seats, seatMap})
  const alexDistance = (alexPosition - begginingSeat)
  console.log(`the distance from Alex to the nearest person is: ${alexDistance}`)
  return alexDistance
}

export { maxDistToClosest };
