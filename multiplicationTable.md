# Multiplication Table

For this kata you should complete the function `multiplicationTable` which takes a number, `n`, and returns a nested array representation of the multiplication table, including the headings of the table's rows and columns.

## Examples

```javascript
multiplicationTable(0);
/*
  []
*/
```

```javascript
multiplicationTable(1);
/*
  [
    [0, 1],
    [1, 1]
  ]
*/
```


```javascript
multiplicationTable(3);
/*
  [
    [0, 1, 2, 3],
    [1, 1, 2, 3],
    [2, 2, 4, 6],
    [3, 3, 6, 9]
  ]
*/
```

```javascript
multiplicationTable(5);
/*
  [
    [0, 1, 2, 3, 4, 5],
    [1, 1, 2, 3, 4, 5],
    [2, 2, 4, 6, 8, 10],
    [4, 4, 8, 12, 16, 20],
    [5, 5, 10, 15, 20, 25]
  ]
*/
```