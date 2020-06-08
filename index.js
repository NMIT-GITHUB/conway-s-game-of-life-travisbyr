function conwaysGameOfLife(board) {
  for (let i = 0; i < board.length; i++) { // Iterate the amount of times that their are subarrays
    const element = board[i];

    for (let e = 0; e < element.length; e++) { // Iterate through all the items
      var count = 0;

      if (e < 9) {
        if (board[i][e + 1] != "0") { // If the item in the sub array does not have a cell to the right of it
          count++;
        }
      }

      if (e > 0) {
        if (board[i][e - 1] != "0") { // If the item in the sub array does not have a cell to the left of it
          count++;
        }
      }

      if (i < 9) {
        if (board[i + 1][e] != "0") { // If the item in the sub array does not have a cell below it
          count++;
        }
      }

      if (i > 0) {
        if (board[i - 1][e] != "0") { // If the item in the sub array does not have a cell above it
          count++;
        }
      }

      if (count == 0 || count == 4) { // If the cell has no neighbour cells or has neighbour cells on all four sides
        board[i][e] = 0; // Kill the cell
      }
    }
  }
  return board;
}

console.log(conwaysGameOfLife([
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "1", "1", "1", "0", "0", "0", "0"],
    ["0", "0", "0", "1", "1", "1", "0", "0", "0", "0"],
    ["0", "0", "0", "1", "1", "1", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],]));
