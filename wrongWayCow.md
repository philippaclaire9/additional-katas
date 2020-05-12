# Wrong Way Cow

In a field, cows usually all stand facing the same way. However, there will often be one cow facing the wrong direction.

Complete the function `wrongWayCow` which takes a string representing a field of cows and returns the coordinates of the cow facing the wrong direction.

The field will contain at least three cows and may also contain empty pasture, denoted by 3 dots per space.

If all the cows are facing the right way, the coordinates array you return should be `[]`, otherwise you should return the coordinates of the cow facing the wrong way. There will never be more than one cow facing in the wrong direction.

## Examples:

```javascript
const field = 'cowcowcowcow';

wrongWayCow(field)
  --> []

```

```javascript
const field = 'wocwocwoccow';

wrongWayCow(field)
  --> [0, 3]

```

```javascript
const field = 'cowcowcow...\n...woccowcow\n............';

wrongWayCow(field)
  --> [1, 1]

```

```javascript
const field = 'cowcowcowcow\n......cowcow\n............\n...cow...woc';

wrongWayCow(field)
  --> [3, 3]

```

```javascript
const field = 'wocwoc...woc...\n...woc...cow...\n...wocwocwocwoc';

wrongWayCow(field)
  --> [1, 3]
```


```javascript
const field = 'cowcowcow...\n...cowcowcow\n............';

wrongWayCow(field)
  --> []

```