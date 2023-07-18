function groupSeats(seatingArrangement, n) {
    const rows = seatingArrangement.length;
    const cols = seatingArrangement[0].length;
    let count = 0;
  
    for (let i = 0; i < rows; i++) {
      let consecutiveEmptySeats = 0;
      let j = 0;
  
      while (j < cols) {
        if (seatingArrangement[i][j] === 0) {
          consecutiveEmptySeats++;
          if (consecutiveEmptySeats === n) {
            count++;
            consecutiveEmptySeats--; // Move to the next seat
          }
        } else {
          consecutiveEmptySeats = 0;
        }
  
        j++;
      }
    }
  
    return count;
  }
  
  // Example usage:
  const seatingArrangement1 = [
    [1, 0, 1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0, 1, 0],
    [0, 0, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 0, 0, 1],
    [1, 1, 1, 0, 1, 0, 1],
    [0, 1, 1, 1, 1, 0, 0]
  ];
  console.log(groupSeats(seatingArrangement1, 2));
  
  const seatingArrangement2 = [
    [1, 0, 1, 0, 1, 0, 1],
    [0, 1, 0, 0, 0, 0, 0],
  ];
  console.log(groupSeats(seatingArrangement2, 4));