# Check Diagonal Winner

In this kata you should implement a function, `checkDiagonalWinner`, which takes a 7 * 6 matrix representing a [Connect 4](https://en.wikipedia.org/wiki/Connect_Four) board. The positions in the matrix will all be filled with the values `null`, `'x'` or `'o'`. 

If there is a diagonal win (4 crosses or zeroes in a diagonal row) your function should return the winning player, `'x'` or `'o'`, if not it should return `false`. You do not need to worry about horizontal or vertical wins for this kata.

You are free to implement this however you like but you may find it useful to bring in another function you have completed recently in your morning katas to act as a helper function.

### Examples

```javascript
const board = [
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null]
];
checkDiagonalWinner(board); //--> false
```

```javascript
const board = [
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  ['x', 'x', 'x', 'x', null, null, null]
];
checkDiagonalWinner(board); //--> false
```

```javascript
const board = [
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, 'o', null, null, null, null, null],
  [null, 'o', null, null, null, null, null],
  [null, 'o', null, null, null, null, null],
  [null, 'o', null, null, null, null, null]
];
checkDiagonalWinner(board); //--> false
```

```javascript
const board = [
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, 'x', null, null, null],
  [null, null, 'x', null, null, null, null],
  [null, 'x', null, null, null, null, null],
  ['x', null, null, null, null, null, null]
];
checkDiagonalWinner(board); //--> 'x'
```

```javascript
const board = [
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, 'o', null, null, null, null],
  [null, null, null, 'o', null, null, null],
  [null, null, null, null, 'o', null, null],
  [null, null, null, null, null, 'o', null]
];
checkDiagonalWinner(board); //--> 'o'
```

### Testing Notes

If no matrix is provided or if the matrix is not the correct dimentions your function should return 'Please provide a 7 * 6 matrix'
