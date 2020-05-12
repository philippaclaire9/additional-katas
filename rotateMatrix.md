## Rotate Matrix

The aim of this kata is to create a function, rotateMatrix, that takes an array of arrays and returns a 'rotated' array where all the values have been rotated 90 degrees in a clockwise direction.

For basic functionality, assume that the matrix is a square:

e.g.

```javascript
const matrix = [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3]
];

rotateArray(matrix)

/*  -->
[
    [1, 1, 1],
    [2, 2, 2],
    [3, 3, 3]
];
*/
```

The function should, however, also rotate matrices that are rectangular:

```javascript
const matrix = [
    [1, 2, 3, 5, 10, 1],
    [3, 3, 1, 1, 3, 6],
    [1, 6, 3, 2, 2, 1]
];

rotateArray(matrix)

/*  -->
[
    [1, 3, 1],
    [6, 3, 2],
    [3, 1, 3],
    [2, 1, 5],
    [2, 3, 10],
    [1, 6, 1]
];
*/
```