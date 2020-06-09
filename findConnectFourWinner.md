## Find Connect Four Winner

In this kata your function, findConnectFourWinner, should take a 7 \* 6 matrix that represents a Connect Four board and calculate whether there is a winner in any direction - horizontal, vertical or diagonal.

If there is a win (4 crosses or zeroes in either a horizontal, vertical or diagonal row) your function should return the winning player, 'x' or 'o', if not it should return false.

You are free to implement this however you like but you may find it useful to bring in other functions you have completed recently in your morning katas to act as helpers.

Examples

```javascript
const board = [
[null, null, null, null, null, null, null],
[null, null, null, null, null, null, null],
[null, null, null, null, null, null, null],
[null, null, null, null, null, null, null],
[null, null, null, null, null, null, null],
[null, null, null, null, null, null, null]
];

findConnectFourWinner(board); --> false
```

```javascript
const board = [
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, 'o', null, null, null, null],
  [null, null, 'x', null, null, null, null],
  [null, 'x', 'o', 'x', null, null, null],
  [null, 'x', 'o', 'x', null, null, null],
];

findConnectFourWinner(board); --> false
```

```javascript
const board = [
[null, null, null, null, null, null, null],
[null, null, null, null, null, null, null],
[null, null, 'o', null, null, null, null],
[null, null, 'o', null, null, null, null],
[null, 'x', 'o', 'x', null, null, null],
[null, 'x', 'o', 'x', null, null, null]
];

findConnectFourWinner(board); --> 'o'
```

```javascript
const board = [
[null, null, null, null, null, null, null],
[null, null, null, null, null, null, null],
[null, null, null, null, null, null, null],
[null, null, 'x', null, null, null, null],
[null, null, 'x', 'x', 'x', null, null],
[null, null, 'o', 'o', 'o', 'o', null]
];

findConnectFourWinner(board); --> 'o'
```

```javascript
const board = [
[null, null, null, null, null, null, null],
[null, null, null, null, null, null, null],
[null, null, null, 'x', null, null, null],
[null, null, 'x', 'o', null, null, null],
[null, 'x', 'o', 'x', null, null, null],
['x', 'x', 'o', 'o', null, null, 'o']
];

findConnectFourWinner(board); --> 'x'
```

```javascript
const board = [
[null, null, null, null, null, null, null],
[null, null, null, null, null, null, null],
['o', null, null, 'o', null, null, null],
['o', 'o', 'x', 'o', null, null, null],
['o', 'x', 'o', 'x', null, null, 'x'],
['x', 'x', 'o', 'o', null, null, 'o']
];


findConnectFourWinner(board); --> 'o'
```

Testing Notes
If no matrix is provided or if the matrix is not the correct dimentions your function should return 'Please provide a 7 \* 6 matrix'
