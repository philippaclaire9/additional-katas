const checkDiagWin = (board) => {
  if (!board.length) return 'Please provide a 7*6 matrix';
  if (board.length !== 6) return 'Please provide a 7*6 matrix';

  let invalidBoard = false;

  board.forEach((row) => {
    if (row.length !== 7) {
      invalidBoard = true;
    }
  });
  if (invalidBoard) return 'Please provide a 7*6 matrix';

  let currentPlayer = '';
  let spaceIndex = 0;
  let horizontalSpaceIndex = 0;
  let verticalSpaceIndex = 0;
  let diagonalSpaceIndex = 0;
  let rowIndex = 0;
  let horizontalCounters = 1;
  let verticalCounters = 0;

  let diagonalCounters = 0;

  board.forEach((row) => {
    rowIndex++;
    if (!currentPlayer) {
      row.forEach((space) => {
        if (space) {
          currentPlayer = space;
          spaceIndex = row.indexOf(space);
          horizontalSpaceIndex = row.indexOf(space);
          verticalSpaceIndex = row.indexOf(space);
          diagonalSpaceIndex = row.indexOf(space);
          rowIndex = board.indexOf(row);
        }
      });
    }

    if (currentPlayer) {
      row.forEach((space) => {
        if (board[rowIndex][spaceIndex + 1] === currentPlayer) {
          horizontalCounters++;
          spaceIndex++;
        }
      });
    }

    if (currentPlayer) {
      if (rowIndex <= 4) {
        //console.log(board[rowIndex + 1][verticalSpaceIndex]);
        if (board[rowIndex + 1][verticalSpaceIndex] === currentPlayer) {
          verticalCounters++;
          //   console.log(rowIndex, verticalCounters);
        }
      }
      if (rowIndex === 5) {
        if (board[rowIndex][verticalSpaceIndex] === currentPlayer) {
          verticalCounters++;
          //   console.log(rowIndex, verticalCounters);
        }
      }
    }
    if (currentPlayer) {
      if (rowIndex <= 4) {
        if (board[rowIndex + 1][diagonalSpaceIndex - 1] === currentPlayer) {
          diagonalCounters++;
          diagonalSpaceIndex--;
        }
        if (board[rowIndex + 1][diagonalSpaceIndex + 1] === currentPlayer) {
          diagonalCounters++;
          diagonalSpaceIndex++;
        }
      }

      if (rowIndex === 5) {
        if (board[rowIndex][diagonalSpaceIndex] === currentPlayer) {
          diagonalCounters++;
        }
      }
      //   console.log(diagonalSpaceIndex, diagonalCounters);
    }
  });

  if (diagonalCounters === 4) {
    return currentPlayer;
  }

  if (verticalCounters === 4) {
    return false;
  }
  if (horizontalCounters === 4) {
    return false;
  }
  if (!currentPlayer) return false;
};

module.exports = { checkDiagWin };
