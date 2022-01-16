/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
    let max = 0, count = 0, seen = false
    for(let i=0; i<seats.length; i++){
        if(seats[i] == 1){
            max = seen ? Math.max(max, count/2) : Math.max(max, count)
            seen = true
            count = 0
        }else{
            count++
        }
    }
    return Math.round(Math.max(count, max))
};

export { maxDistToClosest };