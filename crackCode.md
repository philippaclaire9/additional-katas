For this task we are going to need to decrypt an encrypted key to find out whether it is a valid key.

A key is valid if the 4 most common letters in the part before the brackets are in alphabetical order within in the brackets.

Examples of valid codes:

```
ddd-aaa-z-y-x-123(adxy)
a-b-c-d-e-f-g-h-i-577(abcd)
fff-gg-xx-ss-y(fgsx)
```

An example of an invalid codes might be:

```
a-b-c-d-e-f-g-h-i-577(acdb) // The code in brackets is not in the alphabetical order
fff-gg-xx-ss-y(fgsy) // Although fgsy is alphabetical, x is more common than y
```

The function should return true if code is valid or false if it is not.

You can use these examples to start building up your test suite:

```js
crackCode('ddd-aaa-z-y-x-123(adxy)')
// -> true
```

```js
crackCode('a-b-c-d-e-f-g-h-i-577(abcd)')
// -> true
```

```js
crackCode('fff-gg-xx-ss-y(fgsy)')
// -> false
```
