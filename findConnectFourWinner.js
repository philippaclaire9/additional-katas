// Please do not change the name of this function
const { checkDiagonalWinner } = require('./checkDiagonalWinner');

const findConnectFourWinner = (board) => {
  if (!board.length) return 'Please provide a 7 * 6 matrix';
  if (board.length !== 6) return 'Please provide a 7 * 6 matrix';
  let invalidBoard = false;
  let diagonalWinner = false;
  let verticalWinner = false;
  let noWinner = true;

  board.forEach((array) => {
    if (array.length !== 7) {
      invalidBoard = true;
    }
  });
  if (invalidBoard) return 'Please provide a 7 * 6 matrix';

  let count = 0;
  let oValueIndex = 0;
  let xValueIndex = 0;
  let arrayIndex = 0;
  let o = '';
  let x = '';
  let oVerticalCount = 0;
  let xVerticalCount = 0;
  let letter = '';

  const isO = (value) => value === 'o';
  const isX = (value) => value === 'x';

  const oIndexArray = [];
  const xIndexArray = [];

  board.forEach((array) => {
    if (board.indexOf(array) !== 0) {
      arrayIndex++;
    }
    if (!array.includes('x') && !array.includes('o')) {
      count++;
    } else {
      oValueIndex = array.findIndex(isO);
      xValueIndex = array.findIndex(isX);
      if (!x || !o) {
        o = array[oValueIndex];
        x = arrayIndex[xValueIndex];
      }
      if (array[oValueIndex] === o) {
        oIndexArray.push(oValueIndex);
      }
      if (array[xValueIndex] === x) {
        xIndexArray.push(xValueIndex);
      }

      //else {
      //   invalidBoard = true;
      // }

      // if (array[valueIndex + 1] !== null) {
      //   invalidBoard = true;
      // }

      if (board[arrayIndex][oValueIndex] === 'o') {
        oVerticalCount++;
        //console.log(oVerticalCount);
        if (oVerticalCount === 4) {
          verticalWinner = true;
          // console.log(verticalWinner);
        }
      }

      if (board[arrayIndex][xValueIndex] === 'x') {
        xVerticalCount++;
        //console.log(oVerticalCount);
        if (xVerticalCount === 4) {
          verticalWinner = true;
          //console.log(verticalWinner);
        }
      }
    }
  });
  // const differenceArray = letterIndexArray.map(function (n, i) {
  //   if (i !== letterIndexArray.length - 1) {
  //     return n - letterIndexArray[i + 1];
  //   }
  //   if (letterIndexArray[0] > letterIndexArray[letterIndexArray.length - 1]) {
  //     return 1;
  //   } else {
  //     return -1;
  //   }
  // });

  // const isDifferencePos = differenceArray.every((value) => value == 1);
  // const isDifferenceNeg = differenceArray.every((value) => value == -1);

  // if (differenceArray.length === 4 && isDifferenceNeg) return true;
  // if (differenceArray.length === 4 && isDifferencePos) return true;

  // console.log(diagonalWinner, invalidBoard, count === 6, verticalWinner);
  // if (diagonalWinner) return true;

  if (invalidBoard) return false;

  if (count === 6) return false;

  if (verticalWinner) return 'o';

  if (noWinner) return false;

  //IGNORE BELOW

  // checkDiagonalWinner(board);
  // if (!board.length) return 'Please provide a 7 * 6 matrix';
  // if (board.length !== 6) return 'Please provide a 7 * 6 matrix';
  // let invalidBoard = false;

  // board.forEach((array) => {
  //   if (array.length !== 7) {
  //     invalidBoard = true;
  //   }
  // });
  // if (invalidBoard) return 'Please provide a 7 * 6 matrix';

  // let nullCount = 0;
  // let arrayIndex = 0;

  // let xIndex = 0;
  // let oIndex = 0;

  // const isX = (value) => value === 'x';
  // const isO = (value) => value === 'o';

  // board.forEach((array) => {
  //   if (board.indexOf(array) !== 0) {
  //     arrayIndex++;
  //     if (!array.includes('x') && !array.includes('o')) {
  //       nullCount++;
  //     } else {
  //       if (array.includes('x')) {
  //         xIndex = array.findIndex(isX);
  //       }
  //       if (array.includes('o')) {
  //         oIndex = array.findIndex(isO);
  //       }
  //       console.log('x >>>>', xIndex, oIndex, '<<<< o');
  //     }
  //   }
  // });

  // if (nullCount === 5) return false;
};

module.exports = { findConnectFourWinner };
