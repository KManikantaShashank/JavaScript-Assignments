function spotlightMap(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const spotlightGrid = [];
  
    // Iterate over each cell in the grid
    for (let i = 0; i < rows; i++) {
      spotlightGrid[i] = [];
      for (let j = 0; j < cols; j++) {
        let sum = grid[i][j];
  
        // Calculate the sum of adjacent cells
        if (i > 0) {
          sum += grid[i - 1][j]; // Top
          if (j > 0) sum += grid[i - 1][j - 1]; // Top-left
          if (j < cols - 1) sum += grid[i - 1][j + 1]; // Top-right
        }
        if (i < rows - 1) {
          sum += grid[i + 1][j]; // Bottom
          if (j > 0) sum += grid[i + 1][j - 1]; // Bottom-left
          if (j < cols - 1) sum += grid[i + 1][j + 1]; // Bottom-right
        }
        if (j > 0) sum += grid[i][j - 1]; // Left
        if (j < cols - 1) sum += grid[i][j + 1]; // Right
  
        spotlightGrid[i][j] = sum;
      }
    }
  
    return spotlightGrid;
  }
  
  // Example usage:
  const grid1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  console.log(spotlightMap(grid1));
  
  const grid2 = [
    [2, 6, 1, 3, 7],
    [8, 5, 9, 4, 0]
  ];
  console.log(spotlightMap(grid2));
  
  const grid3 = [[3]];
  console.log(spotlightMap(grid3));