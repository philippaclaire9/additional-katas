const findC4Winner = (board) => {
  if (!board.length) return 'Please provide 7*6 matrix';
  if (board.length !== 6) return 'Please provide 7*6 matrix';
  let invalidBoard = false;
  board.forEach((row) => {
    if (row.length !== 7) {
      invalidBoard = true;
    }
  });
  if (invalidBoard) return 'Please provide 7*6 matrix';

  let noWinner = false;

  let currentX = '';
  let currentO = '';
  let spaceIndexX = 0;
  let rowIndexX = 0;
  let verticalIndexX = 0;
  let horizontalIndexX = 0;
  let verticalCounterX = 0;
  let horizontalCounterX = 0;
  let spaceIndexO = 0;
  let rowIndexO = 0;
  let verticalIndexO = 0;
  let verticalCounterO = 0;
  let horizontalIndexO = 0;
  let horizontalCounterO = 0;

  const checkVerticals = () => {
    if (currentO) {
      if (rowIndexO <= 4) {
        if (board[rowIndexO + 1][verticalIndexO] === 'o') {
          verticalCounterO++;
        }
      }
    }
    if (currentX) {
      if (rowIndexX <= 4) {
        if (board[rowIndexX + 1][verticalIndexX] === 'x') {
          verticalCounterX++;
        }
      }
    }
  };

  const checkHorizontals = (row) => {
    if (currentO) {
      row.forEach((space) => {
        // console.log(rowIndexO, horizontalIndexO + 1);
        if (board[rowIndexO][horizontalIndexO + 1] === currentO) {
          horizontalCounterO++;
          horizontalIndexO++;
          // console.log(horizontalCounterO);
        }
      });
    }

    if (currentX) {
      row.forEach((space) => {
        if (board[rowIndexX][horizontalIndexX + 1] === currentX) {
          horizontalCounterX++;
          horizontalIndexX++;
          // console.log(horizontalCounterX);
        }
      });

      if (horizontalCounterX !== 3) {
        if (rowIndexX <= 4) {
          if (board[rowIndexX + 1].includes('x')) {
            horizontalIndexX = board[rowIndexX + 1].findIndex((x) => x === 'x');
            horizontalCounterX = 0;
            row.forEach((space) => {
              if (board[rowIndexX + 1][horizontalIndexX + 1] === currentX) {
                horizontalCounterX++;
                horizontalIndexX++;
              }
            });
          }
        }
      }
      // console.log(horizontalCounterX);
    }
  };

  board.forEach((row) => {
    if (!currentX) {
      row.forEach((space) => {
        if (space === 'x') {
          currentX = space;
          spaceIndexX = row.indexOf(space);
          verticalIndexX = row.indexOf(space);
          horizontalIndexX = row.indexOf(space);
        }
      });
    }
    if (!currentO) {
      row.forEach((space) => {
        if (space === 'o') {
          currentO = space;
          spaceIndexO = row.indexOf(space);
          verticalIndexO = row.indexOf(space);
          horizontalIndexO = row.indexOf(space);
        }
      });
    }

    checkVerticals();

    checkHorizontals(row);

    rowIndexX++;
    rowIndexO++;
  });

  if (verticalCounterO === 3) return 'o';
  if (verticalCounterX === 3) return 'x';
  if (horizontalCounterO === 3) return 'o';
  if (horizontalCounterX === 3) return 'x';
  if (!currentX && !currentO) return false;
  if (verticalCounterX !== 3 && verticalCounterO !== 3) noWinner = true;
  if (noWinner) return false;
};

module.exports = findC4Winner;
