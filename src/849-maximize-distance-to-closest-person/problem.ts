function maxDistToClosest(seats: number[]): number {
  let lastOccupiedSeat = -1
  let lastBestOccupiedSeat = -1
  let bestDist = 0

  seats.forEach((occupied, currentSeat) => {
    if (!occupied) return;
    const seatMap = [...new Array(seats.length).fill(' ')]
    //Ok, let's think about the people brackets now.
    console.log(`${currentSeat} is occupied. the last occupied seat was ${lastOccupiedSeat}`)
    seatMap[currentSeat] = '^'
    seatMap[lastOccupiedSeat] = '^'
    console.table({seats, seatMap})

    let distance = (currentSeat - lastOccupiedSeat) -1;
    
    console.log(`the distance between the last occupied seat (${lastOccupiedSeat}) and ${currentSeat} is ${distance}`)
    lastOccupiedSeat = currentSeat
    if (distance > bestDist) {
      console.log(`this is the best distance so far. last best distance was ${bestDist}`)
      bestDist = distance;
      lastBestOccupiedSeat = currentSeat
    }
  })
  const begginingSeat = lastBestOccupiedSeat - bestDist -1
  console.log(`I've decided that the best distance is ${bestDist}, between seats ${begginingSeat} and ${lastBestOccupiedSeat}`)
  const seatMap = [...new Array(seats.length).fill(' ')]
  seatMap[begginingSeat] = '^'  
  seatMap[lastBestOccupiedSeat] = '^'
  const alexPosition = Math.round((lastBestOccupiedSeat - begginingSeat)/2)
  seatMap[alexPosition] = 'A'
  console.table({seats, seatMap})
  const alexDistance = alexPosition - begginingSeat
  console.log(`the distance from Alex to the nearest person is: ${alexDistance}, otherwise known as ${bestDist}`)
  return alexDistance
}

export { maxDistToClosest };
